import { useEffect } from 'react';

export default function Privacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Política de Privacidad · Açaí Paradise';
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
      <h1>Política de Privacidad</h1>
      <p className="legal-updated">Última actualización: mayo 2026</p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Titular:</strong> Açaí Paradise SL</li>
        <li><strong>CIF:</strong> B56787526</li>
        <li><strong>Domicilio:</strong> Plaza de la Universidad, 1 — 18001 Granada, España</li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a></li>
      </ul>

      <h2>2. Qué datos recogemos y para qué</h2>
      <p>Actualmente este sitio web no recoge datos personales de forma automatizada. No utilizamos formularios de contacto, CRM ni herramientas de analítica web.</p>
      <p>Los únicos datos que podemos tratar son los que tú nos envíes voluntariamente por correo electrónico (nombre y dirección de email) para:</p>
      <ul>
        <li>Responder a consultas sobre nuestros productos o tiendas.</li>
        <li>Gestionar solicitudes de empleo o franquicia.</li>
      </ul>

      <h2>3. Base legal del tratamiento</h2>
      <p>El tratamiento de tus datos se basa en tu consentimiento al contactarnos voluntariamente (art. 6.1.a RGPD) y en nuestro interés legítimo para gestionar las relaciones comerciales (art. 6.1.f RGPD).</p>

      <h2>4. Conservación de los datos</h2>
      <p>Conservaremos tus datos solo durante el tiempo necesario para atender tu solicitud. Una vez resuelta, se eliminarán salvo obligación legal de conservación.</p>

      <h2>5. Destinatarios</h2>
      <p>No cedemos tus datos a terceros. No utilizamos servicios externos de analítica, publicidad ni CRM que impliquen transferencia de datos personales.</p>

      <h2>6. Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiéndonos a <a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a>.</p>
      <p>También tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>

      <h2>7. Seguridad</h2>
      <p>Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.</p>

      <h2>8. Cambios en esta política</h2>
      <p>Nos reservamos el derecho de actualizar esta política. Cualquier cambio se publicará en esta página con la fecha de actualización revisada.</p>
    </article>
  );
}
