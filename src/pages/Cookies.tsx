import { useEffect } from 'react';

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Política de Cookies · Açaí Paradise';
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (meta) meta.content = 'noindex, nofollow';
    return () => {
      document.title = 'Açaí Paradise · Bowls de açaí en Granada y Sevilla';
      if (meta) meta.content = 'index, follow';
    };
  }, []);

  return (
    <article className="legal">
      <button className="legal-back" onClick={() => (window as any).__navigateTo('/')}>← Volver al inicio</button>
      <h1>Política de Cookies</h1>
      <p className="legal-updated">Última actualización: mayo 2026</p>

      <h2>1. Qué son las cookies</h2>
      <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador. Sirven para recordar preferencias, mejorar la experiencia de navegación o recopilar información estadística.</p>

      <h2>2. Cookies técnicas (esenciales)</h2>
      <p>Guardamos en tu navegador tu elección sobre el aviso de cookies, para no volver a mostrártelo en cada visita. Es un dato técnico que se queda en tu dispositivo: ni lo enviamos ni lo compartimos. Al ser estrictamente necesario, no requiere consentimiento.</p>

      <h2>3. Cookies de análisis (requieren tu consentimiento)</h2>
      <p>Usamos <strong>Google Analytics 4</strong>, gestionado a través de <strong>Google Tag Manager</strong>, para saber cuántas personas visitan la web, qué páginas ven y cómo llegan. Nos sirve para mejorar el sitio; no lo usamos para identificarte personalmente.</p>
      <p>Estas cookies <strong>solo se instalan si las aceptas</strong> en el banner. Aplicamos el <em>Consentimiento (Consent Mode)</em> de Google: mientras no aceptes, la analítica permanece desactivada y no se guardan cookies de análisis en tu dispositivo. Si las rechazas, la web funciona igual.</p>
      <p>Proveedor: Google Ireland Limited. Puedes consultar su <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</p>

      <h2>4. Otros contenidos de terceros</h2>
      <p>En las páginas de nuestras tiendas mostramos un mapa incrustado de <strong>Google Maps</strong>, que puede instalar sus propias cookies al cargarse. Además, el sitio enlaza a plataformas externas como Instagram y TikTok: si haces clic y accedes a ellas, podrán instalar sus cookies conforme a sus políticas. Açaí Paradise no tiene control sobre esas cookies de terceros.</p>

      <h2>5. Cómo cambiar tu decisión</h2>
      <p>La primera vez que entras te mostramos un banner para aceptar o rechazar las cookies no esenciales, conforme al RGPD y a la LSSI-CE. Puedes cambiar tu elección en cualquier momento borrando los datos de navegación de este sitio en tu navegador: al volver a entrar, el aviso aparecerá de nuevo.</p>

      <h2>6. Cómo gestionar cookies en tu navegador</h2>
      <p>Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>7. Contacto</h2>
      <p>Si tienes dudas sobre nuestra política de cookies, escríbenos a <a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a>.</p>
    </article>
  );
}
