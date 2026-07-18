// Construcción de los JSON-LD por página.
//
// Vive aparte de los componentes a propósito: lo usan tanto la app en runtime
// como el script de prerender (scripts/prerender.mjs), que inyecta este mismo
// schema en el HTML estático para que sea visible sin ejecutar JavaScript.
// Si esto se duplicara, el schema servido y el del cliente acabarían divergiendo.

import type { CityData } from '../pages/cityData';
import type { BlogPost } from '../pages/blogData';

export const SITE = 'https://www.acaiparadise.es';

const SOCIAL = [
  'https://www.instagram.com/acaiparadise.es',
  'https://www.tiktok.com/@acaiparadise.es',
];

export function buildCitySchema(c: CityData) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': `${c.canonical}#restaurant`,
        name: c.storeName,
        url: c.canonical,
        image: `${SITE}${c.heroImg}`,
        email: 'info@acaiparadise.es',
        servesCuisine: ['Açaí bowls', 'Smoothies', 'Bowls de fruta'],
        priceRange: '€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Efectivo, Tarjeta, Bizum',
        address: {
          '@type': 'PostalAddress',
          streetAddress: c.streetAddress,
          addressLocality: c.city,
          addressRegion: 'Andalucía',
          postalCode: c.postalCode,
          addressCountry: 'ES',
        },
        geo: { '@type': 'GeoCoordinates', latitude: c.geo.lat, longitude: c.geo.lng },
        areaServed: { '@type': 'City', name: c.city },
        hasMap: c.mapsLink,
        // Sin aggregateRating a propósito: Google no admite reseñas
        // autorreferenciales en LocalBusiness/Organization. No genera estrellas
        // y arriesga los rich snippets de FAQ y breadcrumbs. La valoración se
        // muestra como contenido visible en la página, que sí es legítimo.
        sameAs: SOCIAL,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: c.city, item: c.canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${c.canonical}#faq`,
        mainEntity: c.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

export function buildPostSchema(p: BlogPost) {
  const url = `${SITE}/blog/${p.slug}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: p.h1,
        description: p.description,
        datePublished: p.dateISO,
        dateModified: p.dateISO,
        articleSection: p.category,
        image: `${SITE}${p.heroImg}`,
        inLanguage: 'es',
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: 'Açaí Paradise', url: SITE },
        publisher: {
          '@type': 'Organization',
          name: 'Açaí Paradise',
          logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo-full-blue.png` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
          { '@type': 'ListItem', position: 3, name: p.h1, item: url },
        ],
      },
      ...(p.faq.length
        ? [{
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: p.faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }]
        : []),
    ],
  };
}
