import { useEffect, useRef } from 'react';
import type { CityData } from './cityData';
import { usePageSeo } from '../hooks/usePageSeo';
import { useReveal } from '../hooks/useReveal';

function buildSchema(c: CityData) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Restaurant',
        '@id': `${c.canonical}#restaurant`,
        name: c.storeName,
        url: c.canonical,
        image: `https://www.acaiparadise.es${c.heroImg}`,
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
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: c.ratingValueSchema,
          reviewCount: c.reviewCount,
          bestRating: '5',
        },
        sameAs: ['https://www.instagram.com/acaiparadise.es', 'https://www.tiktok.com/@acaiparadise.es'],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.acaiparadise.es/' },
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

export default function CityPage({ city }: { city: CityData }) {
  usePageSeo({
    title: city.title,
    description: city.description,
    canonical: city.canonical,
    ogImage: `https://www.acaiparadise.es${city.heroImg}`,
  });
  useReveal();

  const galleryRef = useRef<HTMLDivElement>(null);

  // Inyecta el JSON-LD específico de la ciudad y lo retira al salir
  useEffect(() => {
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'city-schema';
    tag.textContent = JSON.stringify(buildSchema(city));
    document.head.appendChild(tag);
    return () => {
      document.getElementById('city-schema')?.remove();
    };
  }, [city]);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).__navigateTo('/');
  };

  const scrollGallery = (dir: 1 | -1) => {
    const el = galleryRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <article className="city">
      {/* ---------- HERO ---------- */}
      {/* <section>, NO <header>: un <header> heredaría position:fixed/z-index:100
          de la regla global y taparía el menú real (#hdr). Igual que la home. */}
      <section className="city-hero" aria-label={`Açaí Paradise ${city.city}`}>
        <div className="city-hero-bg">
          <img src={city.heroImg} alt={city.heroAlt} />
        </div>
        <div className="city-hero-inner">
          <nav className="city-crumbs" aria-label="Migas de pan">
            <a href="/" onClick={goHome}>Inicio</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{city.city}</span>
          </nav>
          <span className="city-eyebrow">{city.eyebrow}</span>
          <h1>{city.h1Lead} <span className="acc">{city.h1Acc}</span></h1>
          <p className="city-sub">{city.intro[0]}</p>
          <div className="city-rating">
            <strong>{city.rating}</strong>
            <span className="stars" aria-hidden="true">★★★★★</span>
            <span>{city.reviewCount} reseñas en Google</span>
          </div>
          <div className="city-ctas">
            <a href={city.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-blue">Cómo llegar <span className="arrow">→</span></a>
            <div className="city-hero-delivery">
              <span className="city-hero-delivery-label">Pídelo a domicilio</span>
              <div className="delivery-logos">
                <a href={city.glovo} target="_blank" rel="noopener noreferrer" aria-label={`Pedir açaí a domicilio en Glovo ${city.city}`}>
                  <img src="/assets/glovo.svg" alt="Glovo" width={42} height={42} />
                </a>
                <a href={city.uber} target="_blank" rel="noopener noreferrer" aria-label={`Pedir açaí a domicilio en Uber Eats ${city.city}`}>
                  <img src="/assets/ubereats.svg" alt="Uber Eats" width={42} height={42} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- INFO + MAPA ---------- */}
      <section className="city-info">
        <div className="city-info-text reveal">
          <h2>Açaí Paradise en {city.city}</h2>
          {city.intro.slice(1).map((p, i) => <p key={i}>{p}</p>)}
          <ul className="city-facts">
            <li><strong>Dirección:</strong> {city.streetAddress}, {city.postalCode} {city.city}</li>
            <li><strong>Cómo llegar:</strong> {city.zona}</li>
            <li><strong>Horario:</strong> consúltalo actualizado en <a href={city.mapsLink} target="_blank" rel="noopener noreferrer">Google Maps</a></li>
          </ul>
          <div className="city-delivery">
            <span className="delivery-label">Pide a domicilio</span>
            <div className="delivery-logos">
              <a href={city.glovo} target="_blank" rel="noopener noreferrer" aria-label={`Pedir açaí en Glovo ${city.city}`}>
                <img src="/assets/glovo.svg" alt="Glovo" width={36} height={36} />
              </a>
              <a href={city.uber} target="_blank" rel="noopener noreferrer" aria-label={`Pedir açaí en Uber Eats ${city.city}`}>
                <img src="/assets/ubereats.svg" alt="Uber Eats" width={36} height={36} />
              </a>
            </div>
          </div>
        </div>
        <div className="city-map reveal d1">
          <iframe
            title={`Mapa de ${city.storeName}`}
            src={city.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* ---------- GALERÍA (carrusel con flechas) ---------- */}
      <section className="city-gallery-section reveal" aria-label={`Açaí Paradise ${city.city} en fotos`}>
        <div className="city-gallery-head">
          <h2>Açaí Paradise {city.city} en fotos</h2>
        </div>
        <div className="city-gallery-wrap">
          <button type="button" className="city-gallery-arrow left" onClick={() => scrollGallery(-1)} aria-label="Ver fotos anteriores">←</button>
          <div className="city-gallery-track" ref={galleryRef}>
            {city.gallery.map((g) => (
              <figure key={g.src}>
                <img src={g.src} alt={g.alt} loading="lazy" />
              </figure>
            ))}
          </div>
          <button type="button" className="city-gallery-arrow right" onClick={() => scrollGallery(1)} aria-label="Ver más fotos">→</button>
        </div>
      </section>

      {/* ---------- FAQ (GEO) ---------- */}
      <section className="city-faq reveal" aria-label="Preguntas frecuentes">
        <h2>Preguntas sobre el açaí en {city.city}</h2>
        <div className="city-faq-list">
          {city.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="city-final reveal">
        <h2>Te esperamos en {city.city}</h2>
        <p>{city.streetAddress} · {city.city}</p>
        <div className="city-ctas">
          <a href={city.mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-yellow">Cómo llegar <span className="arrow">→</span></a>
          <a href={city.reviewsLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark">Ver reseñas en Google</a>
        </div>
      </section>
    </article>
  );
}
