export default function Stores() {
  return (
    <section className="stores" id="tiendas" aria-label="Nuestras tiendas">
      <div className="stores-inner">
        <div className="stores-intro">
          <div>
            <span className="eyebrow reveal">Las tiendas</span>
            <h2 className="reveal d1">¿Dónde <span className="acc">estamos?</span></h2>
          </div>
          <p className="reveal d2">Granada y Sevilla. Eso, por ahora. Pasa, pide, te lo montamos al momento.</p>
        </div>
        <div className="stores-grid">
          <article className="store reveal">
            <div className="store-visual">
              <img src="/assets/837abd8c6f.webp" alt="Fachada de la tienda Açaí Paradise en Granada con su toldo azul" loading="lazy" />
              <span className="city-tag">Granada</span>
            </div>
            <div className="store-body">
              <div className="store-num">01 · Origen</div>
              <h3 className="store-name">Granada Centro</h3>
              <p className="store-addr">Plaza de la Universidad, 1</p>
              <p className="store-hours">
                <span className="day">Lunes a viernes</span> · 10:00 — 22:00<br />
                <span className="day">Sábados y domingos</span> · 16:00 — 22:00
              </p>
              <a href="https://maps.google.com/?q=Plaza+de+la+Universidad+1+Granada" target="_blank" rel="noopener" className="btn btn-dark">Cómo llegar <span className="arrow">→</span></a>
            </div>
          </article>
          <article className="store reveal d1">
            <div className="store-visual">
              <img src="/assets/144c64bb4a.webp" alt="Bowl Paradise sostenido contra el atardecer en una calle de Sevilla" loading="lazy" />
              <span className="city-tag">Sevilla</span>
            </div>
            <div className="store-body">
              <div className="store-num">02 · Nuevo</div>
              <h3 className="store-name">Sevilla Centro</h3>
              <p className="store-addr">Plaza Cristo de Burgos, 9</p>
              <p className="store-hours">
                <span className="day">Todos los días</span> · 16:00 — 22:00
              </p>
              <a href="https://maps.google.com/?q=Plaza+Cristo+de+Burgos+9+Sevilla" target="_blank" rel="noopener" className="btn btn-dark">Cómo llegar <span className="arrow">→</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
