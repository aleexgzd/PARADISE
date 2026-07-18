import { useEffect } from 'react';
import { POSTS } from './blogData';
import { usePageSeo } from '../hooks/usePageSeo';
import Photo from '../components/Photo';
import { useReveal } from '../hooks/useReveal';

const SITE = 'https://www.acaiparadise.es';

function nav(e: React.MouseEvent, path: string) {
  e.preventDefault();
  (window as any).__navigateTo(path);
}

export default function BlogIndex() {
  usePageSeo({
    title: 'Blog del açaí · recetas, guías y curiosidades | Açaí Paradise',
    description:
      'El blog de Açaí Paradise: qué es el açaí, dónde tomarlo en Granada y Sevilla, recetas, toppings y todo sobre los acai bowls.',
    canonical: `${SITE}/blog`,
  });
  useReveal();

  useEffect(() => {
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'blog-index-schema';
    tag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      '@id': `${SITE}/blog#blog`,
      name: 'Blog de Açaí Paradise',
      url: `${SITE}/blog`,
      inLanguage: 'es',
      publisher: { '@type': 'Organization', name: 'Açaí Paradise', url: SITE },
      blogPost: POSTS.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.h1,
        url: `${SITE}/blog/${p.slug}`,
        datePublished: p.dateISO,
        image: `${SITE}${p.heroImg}`,
      })),
    });
    document.head.appendChild(tag);
    return () => { document.getElementById('blog-index-schema')?.remove(); };
  }, []);

  return (
    <article className="blog-index">
      <div className="blog-index-head">
        <div className="blog-post-inner">
          <nav className="city-crumbs blog-crumbs" aria-label="Migas de pan">
            <a href="/" onClick={(e) => nav(e, '/')}>Inicio</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <span className="city-eyebrow blog-eyebrow">El blog</span>
          <h1>Todo sobre el <span className="acc">açaí</span></h1>
          <p>Qué es, dónde tomarlo en Granada y Sevilla, recetas, toppings y curiosidades. Sin postureo.</p>
        </div>
      </div>

      <div className="blog-post-inner">
        <div className="blog-grid">
          {POSTS.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} onClick={(e) => nav(e, `/blog/${p.slug}`)} className="blog-card reveal">
              <div className="blog-card-img">
                <Photo src={p.heroImg} alt={p.heroAlt} sizes="(max-width: 700px) 90vw, 360px" />
                <span className="blog-tag">{p.category}</span>
              </div>
              <div className="blog-card-body">
                <time dateTime={p.dateISO}>{p.dateLabel} · {p.readMin} min</time>
                <h2>{p.h1}</h2>
                <p>{p.excerpt}</p>
                <span className="blog-card-more">Leer más <span aria-hidden="true">→</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
