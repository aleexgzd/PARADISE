import { useState, useEffect } from 'react';

interface HeaderProps {
  forceScrolled?: boolean;
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const [scrolledByScroll, setScrolledByScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled) return;
    const onScroll = () => setScrolledByScroll(window.scrollY > 30);
    onScroll(); // estado inicial correcto al montar / volver a la home
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceScrolled]);

  // En páginas que no son la home (Granada, Sevilla, blog...) el header va
  // siempre fijo. forceScrolled gana de inmediato en cada render, así que no
  // hay frame transitorio ni efecto de aparición al navegar/scrollear.
  const scrolled = forceScrolled || scrolledByScroll;

  const closeMenu = () => setMenuOpen(false);

  const isHome = typeof window !== 'undefined' && window.location.pathname === '/';
  const prefix = isHome ? '' : '/';

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).__navigateTo('/');
  };

  const navTo = (e: React.MouseEvent, hash: string) => {
    closeMenu();
    if (!isHome) {
      e.preventDefault();
      (window as any).__navigateTo('/');
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goPath = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    closeMenu();
    (window as any).__navigateTo(path);
  };

  return (
    <header id="hdr" className={scrolled ? 'scrolled' : ''}>
      <a href="/" className="brand" aria-label="Açaí Paradise — Inicio" onClick={goHome}>
        <img src="/assets/logo-full-white.png" alt="Açaí Paradise" className="brand-full brand-full--light" height={36} />
        <img src="/assets/logo-full-blue.png" alt="" className="brand-full brand-full--dark" height={36} aria-hidden="true" />
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href={`${prefix}#manifiesto`} onClick={(e) => navTo(e, '#manifiesto')}>Quiénes somos</a></li>
          <li><a href={`${prefix}#bowls`} onClick={(e) => navTo(e, '#bowls')}>Productos</a></li>
          <li className="nav-dropdown">
            <span className="nav-dropdown-toggle" aria-haspopup="true" tabIndex={0}>Tiendas <span className="nav-caret" aria-hidden="true">▾</span></span>
            <ul className="nav-submenu">
              <li><a href="/granada" onClick={(e) => goPath(e, '/granada')}>Granada</a></li>
              <li><a href="/sevilla" onClick={(e) => goPath(e, '/sevilla')}>Sevilla</a></li>
            </ul>
          </li>
          <li><a href={`${prefix}#franquicias`} onClick={(e) => navTo(e, '#franquicias')}>Franquicias</a></li>
          <li><a href="/blog" onClick={(e) => goPath(e, '/blog')}>Blog</a></li>
        </ul>
        <ul className={`nav-mobile${menuOpen ? ' open' : ''}`}>
          <li><a href={`${prefix}#manifiesto`} onClick={(e) => navTo(e, '#manifiesto')}>Quiénes somos</a></li>
          <li><a href={`${prefix}#bowls`} onClick={(e) => navTo(e, '#bowls')}>Productos</a></li>
          <li className="nav-mobile-group">
            <span className="nav-mobile-label">Tiendas</span>
            <a className="nav-mobile-sub" href="/granada" onClick={(e) => goPath(e, '/granada')}>Granada</a>
            <a className="nav-mobile-sub" href="/sevilla" onClick={(e) => goPath(e, '/sevilla')}>Sevilla</a>
          </li>
          <li><a href={`${prefix}#franquicias`} onClick={(e) => navTo(e, '#franquicias')}>Franquicias</a></li>
          <li><a href="/blog" onClick={(e) => goPath(e, '/blog')}>Blog</a></li>
          <li><a href={`${prefix}#tiendas`} onClick={(e) => navTo(e, '#tiendas')}>A domicilio</a></li>
        </ul>
        <a href={`${prefix}#tiendas`} className="cta-find" onClick={(e) => navTo(e, '#tiendas')}>A domicilio <span aria-hidden="true">→</span></a>
      </nav>
      <button
        className={`menu-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
