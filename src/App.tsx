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

export default function App() {
  useReveal();
  useSmoothScroll();

  return (
    <>
      <Header />
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
      <Footer />
      <StickyCta />
      <LocalBusinessSchema />
    </>
  );
}
