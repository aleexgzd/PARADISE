import { useEffect } from 'react';
import { POSTS_BY_SLUG, POSTS_BY_SLUG as BY } from './blogData';
import { usePageSeo } from '../hooks/usePageSeo';
import { useReveal } from '../hooks/useReveal';
import { buildPostSchema } from '../seo/schemas';
import Photo from '../components/Photo';

const SITE = 'https://www.acaiparadise.es';

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
    // Igual que en CityPage: el HTML prerenderizado ya trae este script, así
    // que lo reutilizamos en vez de añadir un segundo BlogPosting.
    let tag = document.getElementById('blog-schema') as HTMLScriptElement | null;
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = 'blog-schema';
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify(buildPostSchema(post));
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
        <Photo src={post.heroImg} alt={post.heroAlt} priority sizes="100vw" />
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
                  <Photo src={r.heroImg} alt={r.heroAlt} sizes="(max-width: 700px) 90vw, 360px" />
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
