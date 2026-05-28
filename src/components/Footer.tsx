import BrandName from './BrandName';

export default function Footer() {
  return (
    <footer aria-label="Pie de página">
      <div className="footer-top">
        <div className="footer-claim reveal">
          El paraíso cabe en un <span className="acc">bowl</span>
        </div>
        <img className="footer-mascot reveal d1" src="/assets/f8efcdd675.svg" alt="" aria-hidden="true" />
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <img className="palm" src="/assets/c74bf4c8a6.webp" alt="Logo Açaí Paradise" width={56} height={56} />
          <div className="name"><BrandName /></div>
          <p>Açaí y smoothies en Granada y Sevilla. Producto de verdad, estética de la calle.</p>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">Menú</strong>
          <ul>
            <li><a href="#manifiesto">Quiénes somos</a></li>
            <li><a href="#bowls">Productos</a></li>
            <li><a href="#franquicias">Franquicias</a></li>
            <li><a href="#tiendas">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">Tiendas</strong>
          <ul>
            <li>Granada</li>
            <li className="small">Plaza de la Universidad, 1</li>
            <li style={{ marginTop: 6 }}>Sevilla</li>
            <li className="small">Plaza Cristo de Burgos, 9</li>
          </ul>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">Contacto</strong>
          <ul>
            <li><a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a></li>
            <li><a href="https://www.instagram.com/acaiparadise.es" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@acaiparadise.es" target="_blank" rel="noopener">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© Açaí Paradise · 2026</div>
        <div>Política de privacidad · Cookies · Aviso legal</div>
      </div>
    </footer>
  );
}
