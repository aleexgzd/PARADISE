/**
 * Puerta con contraseña SOLO para las vistas previas de Cloudflare Pages.
 *
 * Qué protege: cualquier host *.pages.dev (vistas previas por rama y por
 * despliegue). acaiparadise.es y www.acaiparadise.es NO pasan por aquí: la web
 * en producción sigue abierta como siempre.
 *
 * Por qué así: el repositorio es público, así que aquí solo se guarda el
 * SHA-256 de la contraseña (larga y aleatoria), nunca la contraseña. La cookie
 * guarda la contraseña (HttpOnly + Secure) y se comprueba contra el hash, de
 * modo que no se puede fabricar una cookie válida leyendo este archivo.
 *
 * Para cambiar la contraseña: sustituir PASS_HASH por el SHA-256 de la nueva.
 * Para quitar la puerta: borrar este archivo (no afecta a producción).
 */
const PASS_HASH = 'c2e032dc43a227cbb6605f87522a67fd46a523eb70f5db6e632e62d9a6214579';
const COOKIE = 'ap_preview';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 días

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function readCookie(request, name) {
  const all = request.headers.get('Cookie') || '';
  const m = all.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

function gatePage(error) {
  const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Vista previa privada · Açaí Paradise</title>
<meta property="og:title" content="Vista previa privada · Açaí Paradise">
<meta property="og:description" content="Contenido privado. Introduce la contraseña para verlo.">
<style>
  *{box-sizing:border-box;margin:0}
  body{min-height:100vh;display:grid;place-items:center;padding:24px;background:#416FE4;
       font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#0D0D0D}
  .card{width:100%;max-width:380px;background:#fff;border-radius:22px;padding:32px 26px;
        box-shadow:0 16px 40px rgba(11,30,78,.25);text-align:center}
  img{width:64px;height:64px;border-radius:50%;margin:0 auto 16px;display:block}
  h1{font-family:Anton,Impact,sans-serif;font-weight:400;text-transform:uppercase;font-size:1.7rem;
     line-height:1.05;color:#0B1E4E;margin-bottom:8px}
  p{font-size:.95rem;line-height:1.5;color:#4A4A4A;margin-bottom:22px}
  input{width:100%;font:inherit;font-size:1rem;padding:14px 16px;border:1.5px solid #E5E9F3;
        border-radius:14px;margin-bottom:12px;outline:none}
  input:focus{border-color:#416FE4}
  button{width:100%;font:inherit;font-weight:600;font-size:1rem;padding:15px;border:0;border-radius:999px;
         background:#FFD84D;color:#0D0D0D;cursor:pointer}
  .err{color:#E4463A;font-size:.9rem;margin:-4px 0 12px}
</style></head>
<body><form class="card" method="post">
  <img src="/favicon.png" alt="Açaí Paradise" width="64" height="64">
  <h1>Vista previa privada</h1>
  <p>Esta página aún no está publicada. Introduce la contraseña que te han enviado.</p>
  ${error ? '<div class="err">Contraseña incorrecta. Prueba otra vez.</div>' : ''}
  <input type="password" name="clave" placeholder="Contraseña" autocomplete="current-password" required autofocus>
  <button type="submit">Entrar</button>
</form></body></html>`;
  return new Response(html, {
    status: 401,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  });
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // Producción (dominio propio): sin puerta.
  if (!url.hostname.endsWith('.pages.dev')) return next();

  // El icono de la pantalla de acceso tiene que poder cargarse sin cookie.
  if (url.pathname === '/favicon.png') return next();

  const saved = readCookie(request, COOKIE);
  if (saved && (await sha256(saved)) === PASS_HASH) {
    const res = await next();
    const out = new Response(res.body, res);
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  }

  if (request.method === 'POST') {
    const form = await request.formData();
    const pass = String(form.get('clave') || '');
    if ((await sha256(pass)) === PASS_HASH) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: url.pathname + url.search,
          'Set-Cookie': `${COOKIE}=${encodeURIComponent(pass)}; Path=/; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return gatePage(true);
  }

  return gatePage(false);
}
