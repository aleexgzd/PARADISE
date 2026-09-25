import { useEffect, useRef } from 'react';
import { FRANQUICIAS as F } from './franquiciasData';
import { usePageSeo } from '../hooks/usePageSeo';
import { useReveal } from '../hooks/useReveal';
import { buildFranquiciasSchema, SITE } from '../seo/schemas';
import Photo from '../components/Photo';
import { GRANADA, SEVILLA } from './cityData';

function nav(e: React.MouseEvent, path: string) {
  e.preventDefault();
  (window as any).__navigateTo(path);
}

/** Único punto de conversión: mailto con asunto y cuerpo preparados.
 *  `data-cta` sirve para medir los clics en GTM. */
function CtaDossier({ children = 'Quiero el dossier' }: { children?: React.ReactNode }) {
  return (
    <a href={F.mailto} className="btn btn-yellow" data-cta="franquicia">
      {children} <span className="arrow" aria-hidden="true">→</span>
    </a>
  );
}

export default function Franquicias() {
  usePageSeo({
    title: F.title,
    description: F.description,
    canonical: F.canonical,
    ogImage: `${SITE}${F.heroImg}`,
  });
  useReveal();

  const galleryRef = useRef<HTMLDivElement>(null);

  // El HTML prerenderizado ya trae este JSON-LD con el mismo id: se reutiliza
  // el nodo en vez de añadir otro (duplicaría el FAQPage).
  useEffect(() => {
    let tag = document.getElementById('franquicias-schema') as HTMLScriptElement | null;
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = 'franquicias-schema';
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify(buildFranquiciasSchema(F));
    return () => {
      document.getElementById('franquicias-schema')?.remove();
    };
  }, []);

  const scrollGallery = (dir: 1 | -1) => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <article className="fr">
      {/* ---------- HERO ---------- */}
      {/* <section>, no <header>: un <header> heredaría el position:fixed del menú. */}
      <section className="fr-hero" aria-label="Franquicia Açaí Paradise">
        <div className="fr-hero-text">
          <nav className="fr-crumbs" aria-label="Migas de pan">
            <a href="/" onClick={(e) => nav(e, '/')}>Inicio</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Franquicias</span>
          </nav>
          <h1>
            <span className="fr-kicker">Franquicia de açaí</span>
            El paraíso cabe en un bowl. <span className="acc">¿Lo abrimos en tu ciudad?</span>
          </h1>
          <p className="fr-hero-sub">
            Empezamos en 2024 con una tienda en Granada y una idea sencilla: açaí de verdad, bien hecho y para
            llevar. Hoy estamos también en Sevilla y buscamos a la persona que abra el siguiente Paradise.
          </p>
          <div className="fr-hero-ctas">
            <CtaDossier />
            <a href="#como-empezar" className="btn btn-ghost">Cómo funciona</a>
          </div>
          <p className="fr-proof">
            <span className="fr-stars" aria-hidden="true">★★★★★</span>
            {GRANADA.rating} en Granada · {SEVILLA.rating} en Sevilla · reseñas de Google
          </p>
          <ul className="fr-pills" aria-label="Lo que ofrece el modelo">
            {F.pills.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div className="fr-hero-media">
          <Photo
            src={F.heroImg}
            alt={F.heroAlt}
            width={1600}
            height={1544}
            priority
            sizes="(max-width: 980px) 100vw, 48vw"
          />
        </div>
      </section>

      {/* ---------- HISTORIA ---------- */}
      <section className="fr-section fr-historia">
        <div className="fr-wrap fr-split">
          <div className="fr-copy">
            <span className="eyebrow reveal">Nuestra historia</span>
            <h2 className="reveal d1">De una idea en Australia a una cola en la puerta</h2>
            <div className="reveal d2">
              {F.historia.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <figure className="fr-photo fr-photo-land reveal d2">
            <Photo
              src="/assets/franquicia-grupo.webp"
              alt="Cuatro amigos comiendo bowls de açaí sentados en una plaza de Granada"
              width={1600}
              height={1067}
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </figure>
        </div>
      </section>

      {/* ---------- POR QUÉ FUNCIONA ---------- */}
      <section className="fr-section fr-razones">
        <div className="fr-wrap">
          <div className="fr-head reveal">
            <span className="eyebrow">Por qué funciona</span>
            <h2>¿Es rentable un negocio de açaí?</h2>
            <p>
              Los números los compartimos en el dossier, con su contexto. Aquí te contamos lo que hay detrás de
              ellos.
            </p>
          </div>
          <div className="fr-cards">
            {F.razones.map((r, i) => (
              <div className={`fr-card reveal d${(i % 3) + 1}`} key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
          <div className="fr-inline-cta reveal">
            <p>¿Quieres ver los números?</p>
            <CtaDossier>Pide el dossier</CtaDossier>
          </div>
        </div>
      </section>

      {/* ---------- MANIFIESTO ---------- */}
      <section className="fr-quote" aria-label="Qué buscamos">
        <p className="reveal">
          No buscamos a quien solo quiera invertir. Buscamos a quien quiera <span>levantar la persiana</span> cada
          mañana.
        </p>
      </section>

      {/* ---------- PERFIL ---------- */}
      <section className="fr-section fr-perfil">
        <div className="fr-wrap fr-split fr-split--rev">
          <figure className="fr-photo fr-photo-port reveal">
            <Photo
              src="/assets/franquicia-clientes.webp"
              alt="Grupo de jóvenes saliendo de la tienda Açaí Paradise con sus bowls"
              width={1600}
              height={2400}
              sizes="(max-width: 980px) 100vw, 40vw"
            />
          </figure>
          <div className="fr-copy">
            <span className="eyebrow reveal">Para quién es</span>
            <h2 className="reveal d1">Una franquicia para jóvenes emprendedores (y para cualquiera con ganas)</h2>
            <div className="reveal d2">
              {F.perfil.parrafos.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <ul className="fr-check reveal d3" aria-label="Qué buscamos en ti">
              {F.perfil.rasgos.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- ACOMPAÑAMIENTO ---------- */}
      <section className="fr-section fr-apoyo">
        <div className="fr-wrap">
          <div className="fr-head reveal">
            <span className="eyebrow">Qué incluye</span>
            <h2>No vas a abrir solo</h2>
            <p>Desde que buscamos el local hasta mucho después de la inauguración, estamos a tu lado.</p>
          </div>
          <div className="fr-cards fr-cards--dark">
            {F.acompanamiento.map((a, i) => (
              <div className={`fr-card reveal d${(i % 3) + 1}`} key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CÓMO EMPEZAR ---------- */}
      <section className="fr-section fr-pasos-sec" id="como-empezar">
        <div className="fr-wrap">
          <div className="fr-head reveal">
            <span className="eyebrow">Cómo empezamos</span>
            <h2>Tres pasos para tu primer Paradise</h2>
          </div>
          <ol className="fr-pasos">
            {F.pasos.map((p, i) => (
              <li className={`reveal d${i + 1}`} key={p.title}>
                <span className="fr-paso-n" aria-hidden="true">{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
          <div className="fr-center reveal">
            <CtaDossier />
          </div>
        </div>
      </section>

      {/* ---------- GALERÍA ---------- */}
      <section className="city-gallery-section reveal" aria-label="Fotos de nuestras tiendas">
        <div className="city-gallery-head">
          <h2>Así es un Açaí Paradise</h2>
        </div>
        <div className="city-gallery-wrap">
          <button type="button" className="city-gallery-arrow left" onClick={() => scrollGallery(-1)} aria-label="Ver fotos anteriores">←</button>
          <div className="city-gallery-track" ref={galleryRef}>
            {F.gallery.map((g) => (
              <figure key={g.src}>
                <Photo src={g.src} alt={g.alt} sizes="(max-width: 700px) 85vw, 420px" />
              </figure>
            ))}
          </div>
          <button type="button" className="city-gallery-arrow right" onClick={() => scrollGallery(1)} aria-label="Ver más fotos">→</button>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="city-faq reveal" aria-label="Preguntas frecuentes">
        <h2>Preguntas frecuentes sobre la franquicia</h2>
        <div className="city-faq-list">
          {F.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="fr-final" aria-label="Contacto para franquicias">
        <div className="fr-final-bg">
          <Photo
            src="/assets/franquicia-ciudad.webp"
            alt=""
            width={1600}
            height={1067}
            sizes="100vw"
          />
        </div>
        <div className="fr-wrap fr-final-in">
          <h2 className="reveal">¿Lo abrimos en tu ciudad?</h2>
          <p className="reveal d1">
            Escríbenos. Te enviamos el dossier completo, con todos los números, y lo hablamos por teléfono sin
            ningún compromiso.
          </p>
          <div className="reveal d2">
            <CtaDossier />
          </div>
          <p className="fr-final-mail reveal d3">o escribe directamente a <a href={F.mailto} data-cta="franquicia">info@acaiparadise.es</a></p>
        </div>
      </section>
    </article>
  );
}
