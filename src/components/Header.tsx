import { useState, useEffect } from 'react';
import BrandName from './BrandName';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="brand" aria-label="Açaí Paradise — Inicio">
        <img src="/assets/abde433eb1.webp" alt="Logo Açaí Paradise" id="brandPalm" width={38} height={38} />
        <span className="wordmark"><BrandName /></span>
      </a>
      <button
        className={`menu-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
      <nav>
        <ul className="nav-links">
          <li><a href="#manifiesto">Quiénes somos</a></li>
          <li><a href="#bowls">Productos</a></li>
          <li><a href="#franquicias">Franquicias</a></li>
          <li><a href="#tiendas">Contacto</a></li>
        </ul>
        <ul className={`nav-mobile${menuOpen ? ' open' : ''}`}>
          <li><a href="#manifiesto" onClick={closeMenu}>Quiénes somos</a></li>
          <li><a href="#bowls" onClick={closeMenu}>Productos</a></li>
          <li><a href="#franquicias" onClick={closeMenu}>Franquicias</a></li>
          <li><a href="#tiendas" onClick={closeMenu}>Contacto</a></li>
          <li><a href="#tiendas" onClick={closeMenu}>Encuéntranos →</a></li>
        </ul>
        <a href="#tiendas" className="cta-find">Encuéntranos <span aria-hidden="true">→</span></a>
      </nav>
    </header>
  );
}
