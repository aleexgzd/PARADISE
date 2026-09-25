import { useEffect, useRef } from 'react';
import { FRANQUICIAS as F } from './franquiciasData';
import { GRANADA, SEVILLA } from './cityData';
import { usePageSeo } from '../hooks/usePageSeo';
import { useReveal } from '../hooks/useReveal';
import { buildFranquiciasSchema, SITE } from '../seo/schemas';
import Photo from '../components/Photo';

function nav(e: React.MouseEvent, path: string) {
  e.preventDefault();
  (window as any).__navigateTo(path);
}

/** Único punto de conversión: mailto con asunto y cuerpo preparados.
 *  `data-cta` sirve para medir los clics en GTM. */
function CtaInfo({ children = 'Quiero información', className = 'btn btn-yellow' }: { children?: React.ReactNode; className?: string }) {
  return (
    <a href={F.mailto} className={className} data-cta="franquicia">
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
      {/* <section>, no <header>: un <header> heredaría el position:fixed del menú.
          Capas, de fondo a frente: degradado de marca > foto fundida por la
          izquierda > tinte y viñeta > grano > texto > sello giratorio. */}
      <section className="fr-hero" aria-label="Franquicia Açaí Paradise">
        <div className="fr-hero-bg">
          <Photo
            src={F.heroImg}
            alt={F.heroAlt}
            width={1600}
            height={1067}
            priority
            sizes="(max-width: 980px) 100vw, 66vw"
          />
        </div>
        <div className="fr-hero-grain" aria-hidden="true" />

        <div className="fr-badge" aria-hidden="true">
          <svg viewBox="0 0 200 200" className="fr-badge-ring">
            <defs>
              <path id="fr-badge-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text>
              <textPath href="#fr-badge-path" textLength="486" lengthAdjust="spacing">
                FRANQUICIAS ABIERTAS · ANDALUCÍA Y TODA ESPAÑA ·
              </textPath>
            </text>
          </svg>
          <img src="/favicon.png" alt="" width={400} height={400} className="fr-badge-logo" />
        </div>

        <div className="fr-wrap fr-hero-in">
          <div className="fr-hero-text">
            <nav className="fr-crumbs fr-anim" style={{ ['--i' as string]: 0 }} aria-label="Migas de pan">
              <a href="/" onClick={(e) => nav(e, '/')}>Inicio</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Franquicias</span>
            </nav>
            <h1>
              <span className="fr-kicker fr-anim" style={{ ['--i' as string]: 1 }}>Franquicia de açaí</span>
              <span className="fr-h1-line fr-anim" style={{ ['--i' as string]: 2 }}>El paraíso cabe en un bowl.</span>
              <span className="fr-h1-line acc fr-anim" style={{ ['--i' as string]: 3 }}>¿Lo abrimos en tu ciudad?</span>
            </h1>
            <p className="fr-hero-sub fr-anim" style={{ ['--i' as string]: 4 }}>
              Un negocio de açaí para llevar, sin cocina ni salida de humos, probado en Granada y Sevilla. Antes de
              dar ningún paso te enseñamos el modelo, estudiamos tus números y vemos juntos cómo sería tu tienda.
            </p>
            <div className="fr-hero-ctas fr-anim" style={{ ['--i' as string]: 5 }}>
              <CtaInfo />
              <a href="#como-trabajamos" className="btn btn-ghost">Cómo trabajamos</a>
            </div>
            <p className="fr-proof fr-anim" style={{ ['--i' as string]: 6 }}>
              <span className="fr-stars" aria-hidden="true">★★★★★</span>
              {GRANADA.rating} en Granada · {SEVILLA.rating} en Sevilla · reseñas de Google
            </p>
          </div>
        </div>

        <div className="fr-hero-foot">
          <ul className="fr-wrap fr-pills" aria-label="Lo que ofrece el modelo">
            {F.pills.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>

      {/* ---------- HISTORIA ---------- */}
      <section className="fr2-historia">
        <div className="fr2-historia-media reveal">
          <Photo
            src="/assets/franquicia-cola.webp"
            alt="Cola de clientes en la puerta de la tienda Açaí Paradise de Granada"
            width={1600}
            height={1067}
            sizes="(max-width: 980px) 100vw, 60vw"
          />
          <span className="fr2-stamp" aria-hidden="true">Granada · desde 2024</span>
        </div>
        <div className="fr-grain fr-grain--light" aria-hidden="true" />
        <div className="fr-wrap fr2-historia-in">
          <div className="fr2-historia-copy">
            <span className="eyebrow reveal">Nuestra historia</span>
            <h2 className="reveal d1">De una idea en Australia a una cola en la puerta</h2>
            <div className="reveal d2">
              {F.historia.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- POR QUÉ FUNCIONA ---------- */}
      <section className="fr-section fr2-razones">
        <div className="fr2-glow" aria-hidden="true" />
        <div className="fr-wrap">
          <div className="fr-head reveal">
            <span className="eyebrow">Por qué funciona</span>
            <h2>¿Es rentable un negocio de açaí?</h2>
            <p>
              Los números los trabajamos contigo en las reuniones, aplicados a tu local. Aquí te contamos lo que hay
              detrás de ellos.
            </p>
          </div>
          <div className="fr2-razones-grid">
            {F.razones.map((r, i) => (
              <article className={`fr2-razon reveal d${(i % 2) + 1}`} key={r.title}>
                <span className="fr2-idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- LEMA (cinta) ---------- */}
      <section className="fr2-cinta" aria-label="El modelo en una frase">
        <p className="sr-only">Sencillo de operar. Fácil de controlar. Hecho para replicarse.</p>
        <div className="fr2-cinta-band" aria-hidden="true">
          <div className="fr2-cinta-track">
            {[0, 1].map((k) => (
              <span className="fr2-cinta-set" key={k}>
                <span>Sencillo de operar</span>
                <img src="/favicon.png" alt="" width={400} height={400} />
                <span>Fácil de controlar</span>
                <img src="/favicon.png" alt="" width={400} height={400} />
                <span className="acc">Hecho para replicarse</span>
                <img src="/favicon.png" alt="" width={400} height={400} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PERFIL ---------- */}
      <section className="fr-section fr2-perfil">
        <div className="fr-wrap fr2-perfil-grid">
          <figure className="fr2-perfil-photo reveal">
            <Photo
              src="/assets/franquicia-clientes.webp"
              alt="Grupo de jóvenes saliendo de la tienda Açaí Paradise con sus bowls"
              width={1600}
              height={2400}
              sizes="(max-width: 980px) 92vw, 40vw"
            />
          </figure>
          <div className="fr-copy">
            <span className="eyebrow reveal">Para quién es</span>
            <h2 className="reveal d1">Una franquicia para emprendedores, jóvenes y no tan jóvenes</h2>
            <p className="reveal d1">
              Hay dos maneras de tener un Açaí Paradise, y las dos funcionan. Lo importante es que encaje contigo.
            </p>
            <div className="fr2-perfiles">
              {F.perfiles.map((p, i) => (
                <div className={`fr2-perfil-card fr2-perfil-card--${i === 0 ? 'a' : 'b'} reveal d${i + 2}`} key={p.title}>
                  <span className="fr2-chip">{i === 0 ? 'Perfil operador' : 'Perfil inversor'}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ACOMPAÑAMIENTO ---------- */}
      <section className="fr-section fr2-apoyo">
        <div className="fr2-apoyo-bg" aria-hidden="true">
          <Photo src="/assets/franquicia-preparacion.webp" alt="" width={1600} height={2400} sizes="50vw" />
        </div>
        <div className="fr-grain" aria-hidden="true" />
        <div className="fr-wrap fr2-apoyo-in">
          <div className="fr-head reveal">
            <span className="eyebrow">Qué incluye</span>
            <h2>No abres solo. Y no te quedas solo.</h2>
            <p>Te acompañamos para abrir y seguimos contigo mientras tu tienda crece.</p>
          </div>
          <div className="fr2-glass-grid">
            {F.apoyo.map((a, i) => (
              <div className={`fr2-glass reveal d${(i % 3) + 1}`} key={a.title}>
                <span className="fr2-glass-dot" aria-hidden="true" />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESO ---------- */}
      <section className="fr-section fr2-proceso" id="como-trabajamos">
        <div className="fr-wrap fr2-proceso-grid">
          <div className="fr2-proceso-aside">
            <span className="eyebrow reveal">Cómo trabajamos</span>
            <h2 className="reveal d1">Paso a paso, y con tus números delante</h2>
            <p className="reveal d2">
              Nadie firma a ciegas. Antes de decidir nada tendremos varias reuniones, cada una con un objetivo, para
              que conozcas el modelo y veas cómo funcionaría en tu caso.
            </p>
            <div className="fr2-sticker reveal d3">
              <p><strong>¿Ya tienes un local?</strong> Cuéntanoslo en tu primer mensaje y lo estudiamos desde la primera reunión.</p>
              <CtaInfo className="btn btn-dark">Escríbenos</CtaInfo>
            </div>
          </div>
          <ol className="fr2-timeline">
            {F.pasos.map((p, i) => (
              <li className="reveal" key={p.title}>
                <span className="fr2-step" aria-hidden="true">{i + 1}</span>
                <div className="fr2-step-body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- GALERÍA ---------- */}
      <section className="city-gallery-section fr2-gallery reveal" aria-label="Fotos de nuestras tiendas">
        <div className="city-gallery-head">
          <span className="eyebrow">Nuestras tiendas</span>
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
      <section className="fr2-faq" aria-label="Preguntas frecuentes">
        <div className="city-faq reveal">
          <span className="eyebrow">Dudas habituales</span>
          <h2>Preguntas frecuentes sobre la franquicia</h2>
          <div className="city-faq-list">
            {F.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="fr-final" aria-label="Contacto para franquicias">
        <div className="fr-grain fr-grain--final" aria-hidden="true" />
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
            Escríbenos y cuéntanos tu idea. Te enviamos el dossier, lo repasamos juntos y, si encaja, estudiamos tu
            caso con números reales. Sin ningún compromiso.
          </p>
          <div className="reveal d2">
            <CtaInfo />
          </div>
          <p className="fr-final-mail reveal d3">o escribe directamente a <a href={F.mailto} data-cta="franquicia">info@acaiparadise.es</a></p>
        </div>
      </section>
    </article>
  );
}
