import { useEffect } from 'react';

export default function AvisoLegal() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Aviso Legal · Açaí Paradise';
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
      <h1>Aviso Legal</h1>
      <p className="legal-updated">Última actualización: mayo 2026</p>

      <h2>1. Datos identificativos</h2>
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:</p>
      <ul>
        <li><strong>Titular:</strong> Açaí Paradise SL</li>
        <li><strong>CIF:</strong> B56787526</li>
        <li><strong>Domicilio social:</strong> Plaza de la Universidad, 1 — 18001 Granada, España</li>
        <li><strong>Correo electrónico:</strong> <a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a></li>
        <li><strong>Actividad:</strong> Venta de bowls de açaí y smoothies</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>Este sitio web tiene como finalidad informar sobre los productos, tiendas y servicios de Açaí Paradise, así como facilitar el contacto con los usuarios interesados.</p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>Todos los contenidos de este sitio web — incluyendo textos, imágenes, logotipos, iconos, fotografías, diseño gráfico y código fuente — son propiedad de Açaí Paradise o de sus legítimos titulares, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial.</p>
      <p>Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa.</p>

      <h2>4. Condiciones de uso</h2>
      <p>El usuario se compromete a utilizar este sitio web de forma diligente, correcta y lícita, y en particular se compromete a no:</p>
      <ul>
        <li>Utilizar los contenidos con fines contrarios a la ley o al orden público.</li>
        <li>Reproducir, copiar o distribuir los contenidos sin autorización.</li>
        <li>Suprimir, eludir o manipular los derechos de propiedad intelectual.</li>
      </ul>

      <h2>5. Responsabilidad</h2>
      <p>Açaí Paradise no se hace responsable de los daños que puedan derivarse de interferencias, omisiones, interrupciones o fallos en el funcionamiento de este sitio web.</p>
      <p>Asimismo, no garantiza la ausencia de virus u otros elementos dañinos introducidos por terceros.</p>

      <h2>6. Enlaces a terceros</h2>
      <p>Este sitio web puede contener enlaces a plataformas externas (Google Maps, Instagram, TikTok). Açaí Paradise no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.</p>

      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Granada, salvo que la ley aplicable disponga otra cosa.</p>
    </article>
  );
}
