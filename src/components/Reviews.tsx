const reviews = [
  { quote: '"El mejor açaí que he probado en Granada. Vine una vez por curiosidad y ahora caigo cada semana. La crema paradise es droga."', name: 'Lucía M.', initial: 'L', time: 'Hace 2 semanas', delay: '' },
  { quote: '"Estética cuidada, producto top, trato cercano. Le dije al de la barra que me sorprendiera y me clavó un Tropical de campeonato."', name: 'Daniel P.', initial: 'D', time: 'Hace 1 mes', delay: 'd1' },
  { quote: '"Por fin abrieron en Sevilla. Llevábamos meses esperando esto. El Brasil con la crema de cacahuete es para guardarlo en una caja fuerte."', name: 'Patricia R.', initial: 'P', time: 'Hace 3 semanas', delay: 'd2' },
];

export default function Reviews() {
  return (
    <section className="reviews" aria-label="Lo que dicen los clientes">
      <div className="reviews-head">
        <div>
          <span className="eyebrow reveal">No te fíes de nosotros</span>
          <h2 className="reveal d1">Fíate de ellos</h2>
        </div>
        <div className="score reveal d2">
          <div className="score-num">4.8</div>
          <div className="score-stars">★★★★★</div>
          <div className="score-info">312 reseñas en Google · Granada y Sevilla</div>
        </div>
      </div>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <article key={r.name} className={`review-card reveal ${r.delay}`}>
            <div className="stars">★★★★★</div>
            <p className="quote">{r.quote}</p>
            <div className="author">
              <div className="avatar">{r.initial}</div>
              <div><strong>{r.name}</strong><small>{r.time}</small></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
