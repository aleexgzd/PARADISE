export default function Footer() {
  const navigate = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    (window as any).__navigateTo(path);
  };

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
          <img className="footer-logo" src="/assets/logo-full-blue.png" alt="Açaí Paradise" height={44} />
          <p>Açaí y smoothies en Granada y Sevilla. Fruta fresca, buen rollo y estética de la calle.</p>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">Menú</strong>
          <ul>
            <li><a href="#manifiesto">Quiénes somos</a></li>
            <li><a href="#bowls">Productos</a></li>
            <li><a href="/blog" onClick={(e) => navigate(e, '/blog')}>Blog</a></li>
            <li><a href="#franquicias">Franquicias</a></li>
            <li><a href="#tiendas">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">Tiendas</strong>
          <ul>
            <li><a href="/granada" onClick={(e) => navigate(e, '/granada')}>Açaí en Granada</a></li>
            <li className="small">Plaza de la Universidad, 1</li>
            <li style={{ marginTop: 6 }}><a href="/sevilla" onClick={(e) => navigate(e, '/sevilla')}>Açaí en Sevilla</a></li>
            <li className="small">Plaza Cristo de Burgos, 9</li>
          </ul>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">Contacto</strong>
          <ul>
            <li><a href="mailto:info@acaiparadise.es">info@acaiparadise.es</a></li>
            <li><a href="https://www.instagram.com/acaiparadise.es" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@acaiparadise.es" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© Açaí Paradise · 2026</div>
        <div>
          <a href="/privacidad" onClick={(e) => navigate(e, '/privacidad')}>Política de privacidad</a>
          {' · '}
          <a href="/cookies" onClick={(e) => navigate(e, '/cookies')}>Cookies</a>
          {' · '}
          <a href="/aviso-legal" onClick={(e) => navigate(e, '/aviso-legal')}>Aviso legal</a>
        </div>
      </div>
    </footer>
  );
}
