export default function MakeItYours() {
  const toppings = [
    { label: 'açaí', featured: true },
    { label: 'granola crunchy' }, { label: 'granola 0%' }, { label: 'granola chocolate' },
    { label: 'sin gluten' }, { label: 'yogurt' }, { label: 'chía' },
    { label: 'leche condensada' }, { label: 'dulce de leche' }, { label: 'proteína' },
    { label: 'lotus' }, { label: 'coco' }, { label: 'fresa' }, { label: 'plátano' },
    { label: 'kiwi' }, { label: 'mango' }, { label: 'piña' },
    { label: 'crema paradise' }, { label: 'choco avellana' },
  ];

  return (
    <section className="miy" id="make">
      <div className="miy-grid">
        <div>
          <span className="eyebrow reveal">Hazlo tuyo</span>
          <h2 className="reveal d1">Hazlo <span className="acc">como tú</span> quieras</h2>
          <p className="reveal d2">Cuatro tamaños, cuatro granolas, una caterva de toppings y todas las frutas que se te ocurran. Tú lo montas, nosotros lo bordamos.</p>
          <div className="miy-words reveal d3">
            {toppings.map((t) => (
              <span key={t.label} className={`word-chip${t.featured ? ' featured' : ''}`}>{t.label}</span>
            ))}
          </div>
          <a href="#tiendas" className="btn btn-yellow">Quiero el mío <span className="arrow">→</span></a>
        </div>
        <div className="miy-photo reveal d2">
          <img src="/assets/f873a8d6b0.webp" alt="Dos bowls vistos desde arriba con zapatillas en una calle de Granada" loading="lazy" />
          <div className="badge">
            <small>Desde</small>
            5€
          </div>
        </div>
      </div>
    </section>
  );
}
