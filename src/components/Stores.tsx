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
            <div className="store-body" itemScope itemType="https://schema.org/Restaurant">
              <meta itemProp="name" content="Açaí Paradise Granada" />
              <div className="store-num">01 · Origen</div>
              <h3 className="store-name">Granada Centro</h3>
              <p className="store-addr" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Plaza de la Universidad, 1</span>
                <meta itemProp="addressLocality" content="Granada" />
                <meta itemProp="addressCountry" content="ES" />
              </p>
              <p className="store-hours">
                <span className="day">Lunes a viernes</span> · 10:00 — 22:00<br />
                <span className="day">Sábados y domingos</span> · 16:00 — 22:00
              </p>
              <div className="store-ctas">
                <a href="https://maps.app.goo.gl/zxZtzb7L4WeUQ8XV6" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Cómo llegar <span className="arrow">→</span></a>
                <a href="mailto:info@acaiparadise.es?subject=Trabaja con nosotros – Granada" className="btn btn-blue">Trabaja con nosotros</a>
              </div>
              <div className="store-delivery">
                <span className="delivery-label">Pide a domicilio</span>
                <div className="delivery-logos">
                  <a href="https://glovoapp.com/es/es/granada/stores/acai-paradise-granada" target="_blank" rel="noopener noreferrer" aria-label="Pedir en Glovo Granada">
                    <img src="/assets/glovo.svg" alt="Glovo" width={36} height={36} />
                  </a>
                  <a href="https://www.ubereats.com/es/store/acai-paradise/Oo67PqodW6OgC13K_QBBXQ" target="_blank" rel="noopener noreferrer" aria-label="Pedir en Uber Eats Granada">
                    <img src="/assets/ubereats.svg" alt="Uber Eats" width={36} height={36} />
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article className="store reveal d1">
            <div className="store-visual">
              <img src="/assets/144c64bb4a.webp" alt="Bowl Paradise sostenido contra el atardecer en una calle de Sevilla" loading="lazy" />
              <span className="city-tag">Sevilla</span>
            </div>
            <div className="store-body" itemScope itemType="https://schema.org/Restaurant">
              <meta itemProp="name" content="Açaí Paradise Sevilla" />
              <div className="store-num">02 · Nuevo</div>
              <h3 className="store-name">Sevilla Centro</h3>
              <p className="store-addr" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">Plaza Cristo de Burgos, 9</span>
                <meta itemProp="addressLocality" content="Sevilla" />
                <meta itemProp="addressCountry" content="ES" />
              </p>
              <p className="store-hours">
                <span className="day">Todos los días</span> · 16:00 — 22:00
              </p>
              <div className="store-ctas">
                <a href="https://maps.app.goo.gl/gFLrE63PyDLXMheS9" target="_blank" rel="noopener noreferrer" className="btn btn-dark">Cómo llegar <span className="arrow">→</span></a>
                <a href="mailto:info@acaiparadise.es?subject=Trabaja con nosotros – Sevilla" className="btn btn-blue">Trabaja con nosotros</a>
              </div>
              <div className="store-delivery">
                <span className="delivery-label">Pide a domicilio</span>
                <div className="delivery-logos">
                  <a href="https://glovoapp.com/es/es/sevilla/stores/acai-paradise-sevilla" target="_blank" rel="noopener noreferrer" aria-label="Pedir en Glovo Sevilla">
                    <img src="/assets/glovo.svg" alt="Glovo" width={36} height={36} />
                  </a>
                  <a href="https://www.ubereats.com/es/store/acai-paradise-sevilla/FcgQBm3mXd67qH1DO9gu4w" target="_blank" rel="noopener noreferrer" aria-label="Pedir en Uber Eats Sevilla">
                    <img src="/assets/ubereats.svg" alt="Uber Eats" width={36} height={36} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
