import BrandName from './BrandName';

export default function Franchise() {
  return (
    <section className="franchise" id="franquicias" aria-label="Franquicias">
      <div className="franchise-bg" role="img" aria-label="Equipo de Açaí Paradise con uniforme azul comiendo bowls en la calle" />
      <div className="franchise-inner">
        <div>
          <span className="eyebrow reveal">Franquicias</span>
          <h2 className="reveal d1">¿Quieres tu <span className="acc">propio <BrandName />?</span></h2>
          <p className="reveal d2">Estamos abriendo franquicias. Si llevas tiempo dándole vueltas a montar algo, hablemos antes de que se te ocurra ponerle otro nombre.</p>
        </div>
        <div className="ctas reveal d2">
          <a href="mailto:info@acaiparadise.es?subject=Franquicia" className="btn btn-yellow">Hablemos <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}
