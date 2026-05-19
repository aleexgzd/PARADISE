export default function Marquee() {
  const items = [
    'Açaí de verdad',
    'Sin postureo',
    'Granada · Sevilla',
    'Bowls que parecen esculturas',
  ];
  const mascot = <span className="mascot-mini" aria-hidden="true"><img src="/assets/f8efcdd675.svg" alt="" /></span>;

  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => <span key={i} className="marquee-item">{t}</span>)}
        {mascot}
        <span className="marquee-item">Tú lo montas, nosotros lo bordamos</span>
        <span className="marquee-item">El paraíso cabe en un bowl</span>
        {items.map((t, i) => <span key={`d-${i}`} className="marquee-item">{t}</span>)}
        {mascot}
        <span className="marquee-item">Tú lo montas, nosotros lo bordamos</span>
        <span className="marquee-item">El paraíso cabe en un bowl</span>
      </div>
    </section>
  );
}
