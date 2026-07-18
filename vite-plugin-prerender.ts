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
 * Qué hace: al terminar el build genera un index.html por ruta con su <head> ya
 * resuelto y su JSON-LD embebido. El <body> sigue siendo el mismo contenedor
 * vacío que hidrata React, así que la app funciona exactamente igual.
 *
 * Cloudflare Pages sirve los archivos estáticos antes que el catch-all de
 * _redirects, así que /granada/index.html gana sobre /* -> /index.html.
 *
 * Por qué es un plugin de Vite y no un script suelto: necesita importar datos
 * de archivos .ts (cityData, blogData, schemas). Un script de Node sólo puede
 * importar TypeScript directamente en versiones muy recientes, y el Node del
 * entorno de build no tiene por qué coincidir con el de desarrollo. Dentro de
 * Vite la resolución de TS está garantizada.
 */
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Plugin } from 'vite';

import { GRANADA, SEVILLA } from './src/pages/cityData';
import { POSTS } from './src/pages/blogData';
import { buildCitySchema, buildPostSchema, SITE } from './src/seo/schemas';

interface Route {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  schema: object | null;
  schemaId?: string;
}

/** Escapa texto que va dentro de un atributo HTML. */
const attr = (s: string) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Escapa el cierre de script dentro de JSON-LD, único carácter peligroso ahí. */
const jsonLd = (obj: object) => JSON.stringify(obj).replace(/</g, '\\u003c');

function routes(): Route[] {
  return [
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
}

/** Etiquetas del head que se reescriben por ruta. */
function headTags(r: Route): [RegExp, string, string][] {
  return [
    [/<title>[\s\S]*?<\/title>/, `<title>${attr(r.title)}</title>`, 'title'],
    [
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${attr(r.description)}" />`,
      'description',
    ],
    [
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${attr(r.canonical)}" />`,
      'canonical',
    ],
    [
      /<meta property="og:title" content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${attr(r.title)}" />`,
      'og:title',
    ],
    [
      /<meta property="og:description" content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${attr(r.description)}" />`,
      'og:description',
    ],
    [
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${attr(r.canonical)}" />`,
      'og:url',
    ],
    [
      /<meta property="og:image" content="[^"]*"\s*\/?>/,
      `<meta property="og:image" content="${attr(r.ogImage)}" />`,
      'og:image',
    ],
    [
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${attr(r.title)}" />`,
      'twitter:title',
    ],
    [
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${attr(r.description)}" />`,
      'twitter:description',
    ],
    [
      /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
      `<meta name="twitter:image" content="${attr(r.ogImage)}" />`,
      'twitter:image',
    ],
  ];
}

export default function prerenderHead(): Plugin {
  let outDir = 'dist';

  return {
    name: 'paradise-prerender-head',
    apply: 'build',

    configResolved(config) {
      outDir = config.build.outDir;
    },

    async closeBundle() {
      const root = process.cwd();
      const dist = join(root, outDir);
      const template = await readFile(join(dist, 'index.html'), 'utf8');
      const problems: string[] = [];

      for (const r of routes()) {
        let html = template;

        for (const [pattern, replacement, label] of headTags(r)) {
          if (!pattern.test(html)) {
            problems.push(`/${r.path}: ${label}`);
            continue;
          }
          html = html.replace(pattern, replacement);
        }

        // JSON-LD propio de la ruta, justo antes de cerrar el head.
        //
        // Lleva el mismo id que usaría el componente al montar (city-schema /
        // blog-schema). Así el componente reutiliza este nodo en vez de añadir
        // un segundo, que dejaría el Restaurant duplicado en la página.
        if (r.schema) {
          html = html.replace(
            '</head>',
            `  <script type="application/ld+json" id="${r.schemaId}">${jsonLd(r.schema)}</script>\n  </head>`,
          );
        }

        const dir = join(dist, r.path);
        await mkdir(dir, { recursive: true });
        await writeFile(join(dir, 'index.html'), html, 'utf8');
        console.log(`  prerender  /${r.path}`);
      }

      if (problems.length) {
        // Falla el build a propósito: si index.html cambia de formato y los
        // patrones dejan de casar, las rutas se quedarían con el head de la
        // home sin que nadie se entere.
        throw new Error(
          'prerender: no se pudieron sustituir estas etiquetas del head:\n  - ' +
            problems.join('\n  - '),
        );
      }
    },
  };
}
