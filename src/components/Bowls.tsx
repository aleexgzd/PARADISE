import { useState, useCallback } from 'react';
import BrandName from './BrandName';
import BreSvg from './BreSvg';

interface Bowl {
  num: string;
  name: string;
  nameJsx?: boolean;
  tag: string;
  ings: string[];
  img: string;
  alt: string;
}

const bowls: Record<string, Bowl> = {
  paradise: {
    num: '01 / 05',
    name: 'PARADIS',
    nameJsx: true,
    tag: 'El que da nombre. Cremoso, con fresa, plátano y arándano. Empieza por aquí.',
    ings: ['açaí', 'granola crunchy', 'crema paradise', 'yogurt', 'leche en polvo', 'fresa', 'plátano', 'arándano'],
    img: '/assets/3282a8d90e.webp',
    alt: 'Bowl Paradise',
  },
  brasil: {
    num: '02 / 05',
    name: 'BRASIL',
    tag: 'Plátano, crema de cacahuete y leche condensada. La receta brasileña original. Si no lo has probado, te ha pasado por encima.',
    ings: ['açaí', 'granola 0% azúcar', 'crema cacahuete', 'leche condensada', 'leche en polvo', 'plátano'],
    img: '/assets/d02aecb644.webp',
    alt: 'Bowl Brasil',
  },
  tropical: {
    num: '03 / 05',
    name: 'TROPICAL',
    tag: 'Piña, mango, kiwi y crema de maracuyá. El más fresco. Y el más fotogénico.',
    ings: ['açaí', 'granola crunchy', 'crema de maracuyá', 'pudding de chía', 'piña', 'mango', 'kiwi'],
    img: '/assets/f8036b505a.webp',
    alt: 'Bowl Tropical',
  },
  dulce: {
    num: '04 / 05',
    name: 'DULCE',
    tag: 'Granola de chocolate, choco avellana, galleta lotus y leche condensada. Postre disfrazado de bowl.',
    ings: ['açaí', 'granola chocolate', 'choco avellana', 'galleta lotus', 'leche condensada', 'fresa', 'plátano'],
    img: '/assets/4b48c37e1d.webp',
    alt: 'Bowl Dulce',
  },
  fit: {
    num: '05 / 05',
    name: 'FIT',
    tag: 'Granola 0%, proteína, crema de cacahuete, chía y fruta. El que no parece fit y lo es.',
    ings: ['açaí', 'granola 0%', 'crema cacahuete', 'pudding chía', 'proteína', 'fresa', 'plátano'],
    img: '/assets/0ff0669d17.webp',
    alt: 'Bowl Fit',
  },
};

const keys = Object.keys(bowls);

export default function Bowls() {
  const [active, setActive] = useState('paradise');
  const [fadeKey, setFadeKey] = useState(0);

  const select = useCallback((key: string) => {
    setActive(key);
    setFadeKey((k) => k + 1);
  }, []);

  const b = bowls[active];

  return (
    <section className="bowls" id="bowls" aria-label="Nuestros bowls">
      <div className="bowls-head">
        <div>
          <span className="eyebrow reveal">La carta</span>
          <h2 className="reveal d1">Lo que <span className="acc">servimos</span></h2>
        </div>
        <p className="reveal d2">Cinco bowls que no se parecen entre sí. Recetas trabajadas, sabores que se entienden a la primera y un par de cosas que no vas a encontrar fuera.</p>
      </div>

      <div className="bowl-tabs" role="tablist" aria-label="Selector de bowl">
        {keys.map((key) => {
          const bowl = bowls[key];
          return (
            <button
              key={key}
              className={`bowl-tab${active === key ? ' active' : ''}`}
              data-bowl={key}
              role="tab"
              aria-selected={active === key}
              onClick={() => select(key)}
            >
              {bowl.nameJsx ? <BrandName /> : bowl.name}
            </button>
          );
        })}
      </div>

      <div className="bowl-stage" id="bowlStage">
        <div className="bowl-info">
          <div className="num">{b.num}</div>
          <h3>{b.nameJsx ? <BrandName /> : b.name}</h3>
          <p className="tagline">{b.tag}</p>
          <div className="bowl-ings">
            {b.ings.map((ing) => (
              <span key={ing} className="ing-chip">{ing}</span>
            ))}
          </div>
          <div className="bowl-prices">
            <div><small>Pequeño</small><strong>5 €</strong></div>
            <div><small>Mediano</small><strong>6,5 €</strong></div>
            <div><small>Grande</small><strong>7,9 €</strong></div>
            <div><small>Extra</small><strong>9,9 €</strong></div>
          </div>
          <a href="#tiendas" className="btn btn-yellow">Pruébalo <span className="arrow">→</span></a>
        </div>
        <div className="bowl-img fade-in" key={fadeKey}>
          <img src={b.img} alt={b.alt} width={560} height={560} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}
