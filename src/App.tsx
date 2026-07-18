import { useState, useEffect } from 'react';
import { useReveal } from './hooks/useReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import Bowls from './components/Bowls';
import MakeItYours from './components/MakeItYours';
import Vibe from './components/Vibe';
import Reviews from './components/Reviews';
import Stores from './components/Stores';
import Social from './components/Social';
import Franchise from './components/Franchise';
import Footer from './components/Footer';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import AvisoLegal from './pages/AvisoLegal';
import CityPage from './pages/CityPage';
import { GRANADA, SEVILLA } from './pages/cityData';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import CookieBanner from './components/CookieBanner';

type Page = 'home' | 'granada' | 'sevilla' | 'blog' | 'blogpost' | 'privacidad' | 'cookies' | 'aviso-legal';

function getPage(path: string): Page {
  if (path === '/granada') return 'granada';
  if (path === '/sevilla') return 'sevilla';
  if (path === '/blog') return 'blog';
  if (path.startsWith('/blog/')) return 'blogpost';
  if (path === '/privacidad') return 'privacidad';
  if (path === '/cookies') return 'cookies';
  if (path === '/aviso-legal') return 'aviso-legal';
  return 'home';
}

function HomePage() {
  useReveal();
  useSmoothScroll();

  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Bowls />
        <MakeItYours />
        <Vibe />
        <Reviews />
        <Stores />
        <Social />
        <Franchise />
      </main>
      <LocalBusinessSchema />
    </>
  );
}

export default function App() {
  // El estado guarda la ruta completa, no el tipo de página. Si guardara solo
  // el tipo, al ir de un post del blog a otro el valor seguiría siendo
  // 'blogpost', React descartaría la actualización y el lector se quedaría
  // viendo el artículo anterior con la URL ya cambiada.
  const [path, setPath] = useState<string>(() => window.location.pathname);
  const page = getPage(path);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Expose navigate function for footer links
  useEffect(() => {
    (window as any).__navigateTo = (to: string) => {
      window.history.pushState({}, '', to);
      setPath(to);
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Header forceScrolled={page !== 'home'} />
      {page === 'home' && <HomePage />}
      {page === 'granada' && <CityPage city={GRANADA} />}
      {page === 'sevilla' && <CityPage city={SEVILLA} />}
      {page === 'blog' && <BlogIndex />}
      {/* key por ruta: fuerza el remontaje al cambiar de artículo, para que se
          recalculen slug, <head> y JSON-LD en lugar de conservar los del anterior. */}
      {page === 'blogpost' && <BlogPost key={path} />}
      {page === 'privacidad' && <Privacidad />}
      {page === 'cookies' && <Cookies />}
      {page === 'aviso-legal' && <AvisoLegal />}
      <Footer />
      <CookieBanner />
    </>
  );
}
