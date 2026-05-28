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
import StickyCta from './components/StickyCta';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';
import AvisoLegal from './pages/AvisoLegal';

type Page = 'home' | 'privacidad' | 'cookies' | 'aviso-legal';

function getPage(): Page {
  const path = window.location.pathname;
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
      <StickyCta />
      <LocalBusinessSchema />
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage);

  useEffect(() => {
    const onPop = () => setPage(getPage());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Expose navigate function for footer links
  useEffect(() => {
    (window as any).__navigateTo = (path: string) => {
      window.history.pushState({}, '', path);
      setPage(getPage());
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Header forceScrolled={page !== 'home'} />
      {page === 'home' && <HomePage />}
      {page === 'privacidad' && <Privacidad />}
      {page === 'cookies' && <Cookies />}
      {page === 'aviso-legal' && <AvisoLegal />}
      <Footer />
    </>
  );
}
