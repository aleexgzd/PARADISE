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

      <h2>2. Cookies que utilizamos</h2>
      <p>Actualmente <strong>este sitio web no utiliza cookies</strong> propias ni de terceros.</p>
      <p>No empleamos herramientas de analítica (como Google Analytics), plataformas de publicidad, CRM ni ningún otro servicio que instale cookies o tecnologías de seguimiento en tu dispositivo.</p>

      <h2>3. Cookies de terceros</h2>
      <p>Este sitio web incluye enlaces a plataformas externas como Google Maps, Instagram y TikTok. Si haces clic en esos enlaces y accedes a dichas plataformas, estas podrán instalar sus propias cookies conforme a sus políticas de privacidad. Açaí Paradise no tiene control sobre esas cookies.</p>

      <h2>4. Cambios futuros</h2>
      <p>Si en el futuro incorporamos servicios que utilicen cookies (analítica, chat, etc.), actualizaremos esta política e implementaremos un banner de consentimiento conforme al RGPD y la LSSI-CE antes de instalar cualquier cookie no esencial.</p>

      <h2>5. Cómo gestionar cookies en tu navegador</h2>
      <p>Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento:</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>6. Contacto</h2>
      <p>Si tienes dudas sobre nuestra política de cookies, escríbenos a <a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a>.</p>
    </article>
  );
}
