import BrandName from './BrandName';

export default function Vibe() {
  return (
    <section className="vibe">
      <div className="vibe-grid">
        <div className="vibe-text">
          <span className="eyebrow reveal" style={{ color: 'var(--amarillo)' }}>El plan</span>
          <h2 className="reveal d1">Cómo es venir a <BrandName /></h2>
          <p className="lead reveal d2">No hace falta inventarse un plan.</p>
          <p className="reveal d2">Vienes. Pides. Te sientas.</p>
          <p className="reveal d3">Te ríes de algo. Le enseñas el bowl al de al lado. <span className="acc">Sacas el móvil porque está demasiado bonito para no sacarlo.</span></p>
          <p className="reveal d3">Sales con la sensación rara de que un día gris se ha puesto un poco mejor.</p>
          <div className="signature reveal d4">Eso, básicamente.</div>
        </div>
        <div className="vibe-photos reveal d2" aria-hidden="true">
          <div className="ph ph-a"><img src="/assets/5289370d2b.webp" alt="" /></div>
          <div className="ph ph-b"><img src="/assets/e7234417d3.webp" alt="" /></div>
        </div>
      </div>
    </section>
  );
}
