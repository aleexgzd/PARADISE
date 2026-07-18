import { useEffect } from 'react';
import { POSTS_BY_SLUG, POSTS_BY_SLUG as BY, type BlogPost as Post } from './blogData';
import { usePageSeo } from '../hooks/usePageSeo';
import { useReveal } from '../hooks/useReveal';

const SITE = 'https://www.acaiparadise.es';

function buildSchema(p: Post) {
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

function nav(e: React.MouseEvent, path: string) {
  e.preventDefault();
  (window as any).__navigateTo(path);
}

export default function BlogPost() {
  const slug = window.location.pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
  const post = POSTS_BY_SLUG[slug];

  usePageSeo({
    title: post ? post.title : 'Artículo no encontrado · Açaí Paradise',
    description: post ? post.description : 'El artículo que buscas no existe o se ha movido.',
    canonical: post ? `${SITE}/blog/${post.slug}` : `${SITE}/blog`,
    ogImage: post ? `${SITE}${post.heroImg}` : undefined,
  });
  useReveal();

  useEffect(() => {
    if (!post) return;
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'blog-schema';
    tag.textContent = JSON.stringify(buildSchema(post));
    document.head.appendChild(tag);
    return () => { document.getElementById('blog-schema')?.remove(); };
  }, [post]);

  // Cloudflare Pages sirve el catch-all con HTTP 200, así que una URL de post
  // inexistente sería un soft 404 indexable. Marcamos noindex mientras se
  // muestre el "no encontrado".
  useEffect(() => {
    if (post) return;
    const tag = document.createElement('meta');
    tag.name = 'robots';
    tag.content = 'noindex, follow';
    tag.id = 'blog-noindex';
    document.head.appendChild(tag);
    return () => { document.getElementById('blog-noindex')?.remove(); };
  }, [post]);

  if (!post) {
    return (
      <article className="blog-post">
        <div className="blog-post-inner" style={{ paddingTop: 140 }}>
          <h1>Artículo no encontrado</h1>
          <p>Puede que se haya movido. <a href="/blog" onClick={(e) => nav(e, '/blog')}>Volver al blog →</a></p>
        </div>
      </article>
    );
  }

  const related = post.related.map((s) => BY[s]).filter(Boolean);

  return (
    <article className="blog-post">
      <div className="blog-post-head">
        <div className="blog-post-inner">
          <nav className="city-crumbs blog-crumbs" aria-label="Migas de pan">
            <a href="/" onClick={(e) => nav(e, '/')}>Inicio</a>
            <span aria-hidden="true">/</span>
            <a href="/blog" onClick={(e) => nav(e, '/blog')}>Blog</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.category}</span>
          </nav>
          <div className="blog-post-meta">
            <span className="blog-tag">{post.category}</span>
            <time dateTime={post.dateISO}>{post.dateLabel}</time>
            <span>· {post.readMin} min de lectura</span>
          </div>
          <h1>{post.h1}</h1>
        </div>
      </div>

      <div className="blog-post-hero">
        <img src={post.heroImg} alt={post.heroAlt} fetchPriority="high" decoding="async" />
      </div>

      <div className="blog-post-inner blog-post-body">
        {post.body.map((b, i) => {
          if (b.t === 'h2') return <h2 key={i} className="reveal">{b.text}</h2>;
          if (b.t === 'ul') return <ul key={i} className="reveal">{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
          return <p key={i} className="reveal">{b.text}</p>;
        })}

        {post.faq.length > 0 && (
          <section className="blog-faq" aria-label="Preguntas frecuentes">
            <h2>Preguntas frecuentes</h2>
            <div className="city-faq-list">
              {post.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="blog-cta">
          <h2>Pruébalo en Açaí Paradise</h2>
          <p>Acai bowls de verdad, con fruta fresca del día, en el centro de Granada y Sevilla. En tienda o a domicilio.</p>
          <div className="blog-cta-btns">
            <a href="/granada" onClick={(e) => nav(e, '/granada')} className="btn btn-blue">Açaí en Granada <span className="arrow">→</span></a>
            <a href="/sevilla" onClick={(e) => nav(e, '/sevilla')} className="btn btn-dark">Açaí en Sevilla <span className="arrow">→</span></a>
          </div>
        </aside>

        {related.length > 0 && (
          <section className="blog-related" aria-label="Sigue leyendo">
            <h2>Sigue leyendo</h2>
            <div className="blog-related-grid">
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} onClick={(e) => nav(e, `/blog/${r.slug}`)} className="blog-related-card">
                  <img src={r.heroImg} alt={r.heroAlt} loading="lazy" />
                  <div>
                    <span className="blog-tag">{r.category}</span>
                    <h3>{r.h1}</h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
