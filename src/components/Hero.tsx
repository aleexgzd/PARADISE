export default function Hero() {
  return (
    <section className="hero" aria-label="Bienvenida">
      <div className="hero-bg" role="img" aria-label="Bowl de açaí en mano por la calle de Granada con la palmera neón de Açaí Paradise al fondo" />
      <div className="hero-content">
        <span className="hero-tag reveal"><span className="dot" /> Açaí Paradise · Bowls de açaí y smoothies en Granada y Sevilla</span>
        <h1 className="reveal d1">El paraíso<br />cabe en un<br /><span className="em">bowl</span></h1>
        <p className="sub reveal d2">Açaí y smoothies en Granada y Sevilla. Solo producto de verdad en un bowl que sabe bien.</p>
        <div className="hero-ctas reveal d3">
          <a href="#tiendas" className="btn btn-primary">Encuéntranos <span className="arrow">→</span></a>
          <a href="#bowls" className="btn btn-ghost">Ver la carta</a>
        </div>
      </div>
      <div className="hero-meta" aria-hidden="true">
        <strong>5 bowls · 3 smoothies</strong>
      </div>
    </section>
  );
}
