import { useEffect } from 'react';

interface PageSeo {
  /** Título de la pestaña / SERP (50-60 caracteres ideal) */
  title: string;
  /** Meta description (120-160 caracteres ideal) */
  description: string;
  /** URL canónica absoluta de esta página */
  canonical: string;
  /** Imagen para Open Graph (absoluta). Opcional. */
  ogImage?: string;
}

const DEFAULTS = {
  title: 'Açaí Paradise · Bowls de açaí en Granada y Sevilla | Desde 5€',
  description:
    'Los mejores bowls de açaí en Granada y Sevilla. 5 bowls, 3 smoothies, fruta fresca del día. Pide en tienda o a domicilio por Glovo y Uber Eats. Desde 5 €.',
  canonical: 'https://www.acaiparadise.es',
  ogImage: 'https://www.acaiparadise.es/og-image.png',
};

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (el) el.setAttribute(attr, value);
}

/**
 * Gestiona las etiquetas del <head> (title, description, canonical, Open Graph)
 * de forma dinámica por página en esta SPA, y las restaura al desmontar.
 */
export function usePageSeo({ title, description, canonical, ogImage }: PageSeo) {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    // Siempre se fija: si la página no trae imagen propia, se vuelve a la de
    // marca. Si no, hereda la de la página anterior (p. ej. /blog quedaba con
    // la foto de la ciudad que se acababa de visitar).
    setMeta('meta[property="og:image"]', 'content', ogImage ?? DEFAULTS.ogImage);
    setMeta('meta[name="twitter:image"]', 'content', ogImage ?? DEFAULTS.ogImage);

    return () => {
      document.title = DEFAULTS.title;
      setMeta('meta[name="description"]', 'content', DEFAULTS.description);
      setMeta('link[rel="canonical"]', 'href', DEFAULTS.canonical);
      setMeta('meta[property="og:title"]', 'content', DEFAULTS.title);
      setMeta('meta[property="og:description"]', 'content', DEFAULTS.description);
      setMeta('meta[property="og:url"]', 'content', DEFAULTS.canonical);
      setMeta('meta[name="twitter:title"]', 'content', DEFAULTS.title);
      setMeta('meta[name="twitter:description"]', 'content', DEFAULTS.description);
      setMeta('meta[property="og:image"]', 'content', DEFAULTS.ogImage);
      setMeta('meta[name="twitter:image"]', 'content', DEFAULTS.ogImage);
    };
  }, [title, description, canonical, ogImage]);
}
