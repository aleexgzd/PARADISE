import { useState, useEffect } from 'react';

interface HeaderProps {
  forceScrolled?: boolean;
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (forceScrolled) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceScrolled]);

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
          <li><a href={`${prefix}#franquicias`} onClick={(e) => navTo(e, '#franquicias')}>Franquicias</a></li>
          <li><a href={`${prefix}#tiendas`} onClick={(e) => navTo(e, '#tiendas')}>Contacto</a></li>
        </ul>
        <ul className={`nav-mobile${menuOpen ? ' open' : ''}`}>
          <li><a href={`${prefix}#manifiesto`} onClick={(e) => navTo(e, '#manifiesto')}>Quiénes somos</a></li>
          <li><a href={`${prefix}#bowls`} onClick={(e) => navTo(e, '#bowls')}>Productos</a></li>
          <li><a href={`${prefix}#franquicias`} onClick={(e) => navTo(e, '#franquicias')}>Franquicias</a></li>
          <li><a href={`${prefix}#tiendas`} onClick={(e) => navTo(e, '#tiendas')}>Contacto</a></li>
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
