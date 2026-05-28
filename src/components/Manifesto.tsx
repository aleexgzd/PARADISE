import BrandName from './BrandName';

export default function Manifesto() {
  return (
    <section className="manifesto" id="manifiesto">
      <div className="manifesto-grid">
        <div className="manifesto-text">
          <span className="eyebrow reveal">Qué es esto</span>
          <h2 className="reveal d1">Esto es <span className="acc"><BrandName /></span></h2>
          <p className="reveal d2">Açaí y smoothies en Granada y Sevilla. <strong>Sin complicaciones, sin postureo.</strong> Solo un bowl que sabe bien, una cuchara y un rato bueno.</p>
          <p className="reveal d3">Empezamos en Granada hace dos años porque echábamos de menos un sitio así. Sevilla vino después. Lo que viene, ya se verá.</p>
        </div>
        <div className="manifesto-photo reveal d2">
          <img src="/assets/16b86f2ad5.webp" alt="Grupo de amigos riéndose con bowls delante de la tienda Açaí Paradise en Granada" loading="lazy" />
          <span className="sticker">Desde 2024</span>
        </div>
      </div>
    </section>
  );
}
