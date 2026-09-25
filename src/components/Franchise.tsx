import BrandName from './BrandName';
import { FRANQUICIAS_MAILTO } from '../pages/franquiciasData';

export default function Franchise() {
  const go = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).__navigateTo('/franquicias');
  };

  return (
    <section className="franchise" id="franquicias" aria-label="Franquicias">
      <div className="franchise-bg" role="img" aria-label="Equipo de Açaí Paradise con uniforme azul comiendo bowls en la calle" />
      <div className="franchise-inner">
        <div>
          <span className="eyebrow reveal">Franquicias</span>
          <h2 className="reveal d1">¿Quieres tu <span className="acc">propio <BrandName />?</span></h2>
          <p className="reveal d2">Un negocio sin cocina ni salida de humos, probado en Granada y Sevilla. Si llevas tiempo pensando en montar algo tuyo, empieza por aquí.</p>
        </div>
        <div className="ctas reveal d2">
          <a href="/franquicias" className="btn btn-yellow" onClick={go}>Descubre la franquicia <span className="arrow">→</span></a>
          <a href={FRANQUICIAS_MAILTO} className="btn btn-ghost" data-cta="franquicia">Quiero el dossier</a>
        </div>
      </div>
    </section>
  );
}
