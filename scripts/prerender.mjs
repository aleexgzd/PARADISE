/**
 * Prerender del <head> por ruta.
 *
 * El problema que resuelve: esto es una SPA y Cloudflare sirve el mismo
 * index.html para todas las rutas. El title, la meta description, el canonical,
 * las Open Graph y el JSON-LD de cada página los pone JavaScript al montar
 * React. Cualquiera que no ejecute JS —WhatsApp al generar la previsualización
 * de un enlace, Bing, rastreadores de IA, y Googlebot en su primera pasada— ve
 * únicamente el head genérico de la home.
 *
 * Qué hace: tras el build, genera un index.html por ruta con su <head> ya
 * resuelto y su JSON-LD embebido. El <body> sigue siendo el mismo contenedor
 * vacío que hidrata React, así que la app funciona exactamente igual.
 *
 * Cloudflare Pages sirve los archivos estáticos antes que el catch-all de
 * _redirects, así que /granada/index.html gana sobre /* -> /index.html.
 *
 * Se ejecuta solo, después de `vite build` (ver package.json).
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://www.acaiparadise.es';

const { GRANADA, SEVILLA } = await import(join(ROOT, 'src/pages/cityData.ts'));
const { POSTS } = await import(join(ROOT, 'src/pages/blogData.ts'));
const { buildCitySchema, buildPostSchema } = await import(join(ROOT, 'src/seo/schemas.ts'));

/** Escapa texto que va dentro de un atributo HTML. */
const attr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Escapa el cierre de script dentro de JSON-LD, único carácter peligroso ahí. */
const jsonLd = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

/** Rutas a generar. La home ya la sirve el index.html original. */
const routes = [
  {
    path: 'granada',
    title: GRANADA.title,
    description: GRANADA.description,
    canonical: GRANADA.canonical,
    ogImage: `${SITE}${GRANADA.heroImg}`,
    schema: buildCitySchema(GRANADA),
    schemaId: 'city-schema',
  },
  {
    path: 'sevilla',
    title: SEVILLA.title,
    description: SEVILLA.description,
    canonical: SEVILLA.canonical,
    ogImage: `${SITE}${SEVILLA.heroImg}`,
    schema: buildCitySchema(SEVILLA),
    schemaId: 'city-schema',
  },
  {
    path: 'blog',
    title: 'Blog del açaí · recetas, guías y curiosidades | Açaí Paradise',
    description:
      'El blog de Açaí Paradise: qué es el açaí, dónde tomarlo en Granada y Sevilla, recetas, toppings y todo sobre los acai bowls.',
    canonical: `${SITE}/blog`,
    ogImage: `${SITE}/og-image.png`,
    schema: null,
  },
  ...POSTS.map((p) => ({
    path: `blog/${p.slug}`,
    title: p.title,
    description: p.description,
    canonical: `${SITE}/blog/${p.slug}`,
    ogImage: `${SITE}${p.heroImg}`,
    schema: buildPostSchema(p),
    schemaId: 'blog-schema',
  })),
];

/** Sustituye una etiqueta del head por su versión con el valor de esta ruta. */
function replaceTag(html, pattern, replacement, label, warnings) {
  if (!pattern.test(html)) {
    warnings.push(label);
    return html;
  }
  return html.replace(pattern, replacement);
}

const template = await readFile(join(DIST, 'index.html'), 'utf8');
const allWarnings = [];

for (const r of routes) {
  let html = template;
  const w = [];

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${attr(r.title)}</title>`, 'title', w);
  html = replaceTag(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${attr(r.description)}" />`,
    'description',
    w,
  );
  html = replaceTag(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${attr(r.canonical)}" />`,
    'canonical',
    w,
  );
  html = replaceTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${attr(r.title)}" />`,
    'og:title',
    w,
  );
  html = replaceTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${attr(r.description)}" />`,
    'og:description',
    w,
  );
  html = replaceTag(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${attr(r.canonical)}" />`,
    'og:url',
    w,
  );
  html = replaceTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${attr(r.ogImage)}" />`,
    'og:image',
    w,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${attr(r.title)}" />`,
    'twitter:title',
    w,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${attr(r.description)}" />`,
    'twitter:description',
    w,
  );
  html = replaceTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${attr(r.ogImage)}" />`,
    'twitter:image',
    w,
  );

  // JSON-LD propio de la ruta, justo antes de cerrar el head.
  //
  // Lleva el mismo id que usaría el componente al montar (city-schema /
  // blog-schema). Así el componente reutiliza este nodo en vez de añadir un
  // segundo, que dejaría el Restaurant duplicado en la página.
  if (r.schema) {
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json" id="${r.schemaId}">${jsonLd(r.schema)}</script>\n  </head>`,
    );
  }

  const outDir = join(DIST, r.path);
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, 'index.html'), html, 'utf8');

  const mark = w.length ? `⚠ no sustituido: ${w.join(', ')}` : '';
  console.log(`  /${r.path.padEnd(26)} ${r.schema ? 'con schema' : 'sin schema'}  ${mark}`);
  if (w.length) allWarnings.push(`/${r.path}: ${w.join(', ')}`);
}

console.log(`\nPrerender: ${routes.length} rutas generadas.`);

if (allWarnings.length) {
  console.error('\nERROR: alguna etiqueta del head no se pudo sustituir.');
  console.error('Suele significar que index.html cambió de formato y los patrones ya no casan.');
  allWarnings.forEach((x) => console.error('  - ' + x));
  process.exit(1);
}
