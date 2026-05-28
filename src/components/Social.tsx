const tiles = [
  { img: '/assets/b5db77d93d.webp', label: 'Atardecer en Granada →', aria: 'dos bowls al atardecer', alt: 'Dos bowls de açaí al atardecer en Granada' },
  { img: '/assets/2254602a4b.webp', label: 'Detrás de barra →', aria: 'bowl en barra con toppings', alt: 'Bowl de açaí preparándose en barra con toppings frescos' },
  { img: '/assets/13ae4cea90.webp', label: 'El merch →', aria: 'camiseta Paradise con palmera', alt: 'Camiseta Açaí Paradise con palmera estampada' },
  { img: '/assets/e7234417d3.webp', label: 'Tarde de scooter →', aria: 'dos bowls en moto al atardecer', alt: 'Dos bowls de açaí sobre una moto al atardecer' },
];

export default function Social() {
  return (
    <section className="social" aria-label="Síguenos en redes">
      <div className="social-inner">
        <div className="social-head">
          <div>
            <span className="eyebrow reveal">Redes</span>
            <h2 className="reveal d1">Lo que pasa <span className="acc">entre bowl y bowl</span></h2>
          </div>
          <div className="handle-block reveal d2">
            <div className="handle">@acaiparadise.es</div>
            <div className="channels">
              <a href="https://www.instagram.com/acaiparadise.es" target="_blank" rel="noopener">Instagram</a>
              {' · '}
              <a href="https://www.tiktok.com/@acaiparadise.es" target="_blank" rel="noopener">TikTok</a>
            </div>
          </div>
        </div>
        <div className="ig-grid reveal d2">
          {tiles.map((t) => (
            <a key={t.label} href="https://www.instagram.com/acaiparadise.es" target="_blank" rel="noopener" className="ig-tile" aria-label={`Instagram post: ${t.aria}`}>
              <img src={t.img} alt={t.alt} loading="lazy" />
              <span className="ig-label">{t.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
