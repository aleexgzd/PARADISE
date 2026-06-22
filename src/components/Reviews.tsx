import CountUp from './CountUp';

const reviews = [
  {
    quote: 'Fuimos ayer por primera vez y nos encantó la experiencia. Había bastante gente, pero aun así las chicas tuvieron muchísima paciencia con nosotras, nos explicaron todo súper bien y nos ayudaron a elegir sin ningún problema. Se nota que atienden con ganas y muy buen trato. Además, estaba todo buenísimo, el açaí súper rico y la fruta muy fresca. Sin duda volveremos :)',
    name: 'Claudia Chamorro',
    initial: 'C',
    time: 'Hace 1 semana',
    scores: 'Comida 5/5 · Servicio 5/5 · Ambiente 5/5',
    delay: '',
  },
  {
    quote: 'Nos encanta el açaí, hemos probado muchos y este es sin duda el mejor, sabor delicioso, textura perfecta, nada que mejorar. Buen precio, la atención es muy buena, son súper amables, volveremos sin duda.',
    name: 'Diana Sinisterra',
    initial: 'D',
    time: 'Hace 1 mes',
    scores: 'Comida 5/5 · Servicio 5/5 · Ambiente 5/5',
    delay: 'd1',
  },
  {
    quote: 'Nuestra primera vez probándolo, y estaba exquisito. La fruta muy buena y fresca y la cantidad por el precio muy bien. Repetiremos 😄',
    name: 'Celia',
    initial: 'Ce',
    time: 'Hace 1 día',
    scores: 'Comida 5/5 · Servicio 5/5 · Ambiente 3/5',
    delay: 'd2',
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="resenas" aria-label="Reseñas de clientes en Google">
      <div className="reviews-head">
        <div>
          <span className="eyebrow reveal">No te fíes de nosotros</span>
          <h2 className="reveal d1">Fíate de ellos</h2>
        </div>
        <div className="score-pair reveal d2">
          <a href="https://share.google/IXYaUPGBe4V8oAeAI" target="_blank" rel="noopener noreferrer" className="score">
            <CountUp value={4.8} className="score-num" />
            <div className="score-stars">★★★★★</div>
            <div className="score-info">439 reseñas · Granada</div>
          </a>
          <a href="https://share.google/3jKJpQpucrMkYyPad" target="_blank" rel="noopener noreferrer" className="score">
            <CountUp value={4.9} className="score-num" />
            <div className="score-stars">★★★★★</div>
            <div className="score-info">85 reseñas · Sevilla</div>
          </a>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <article key={r.name} className={`review-card reveal ${r.delay}`}>
            <div className="stars">★★★★★</div>
            <p className="quote">{r.quote}</p>
            <div className="review-scores">{r.scores}</div>
            <div className="author">
              <div className="avatar">{r.initial}</div>
              <div><strong>{r.name}</strong><small>{r.time}</small></div>
            </div>
          </article>
        ))}
      </div>

      <div className="reviews-ctas reveal d3">
        <span className="reviews-ctas-label">¿Ya nos has probado? Cuéntalo</span>
        <div className="reviews-ctas-btns">
          <a href="https://share.google/IXYaUPGBe4V8oAeAI" target="_blank" rel="noopener noreferrer" className="btn btn-blue">Reseñar Granada <span className="arrow">→</span></a>
          <a href="https://share.google/3jKJpQpucrMkYyPad" target="_blank" rel="noopener noreferrer" className="btn btn-blue">Reseñar Sevilla <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}
