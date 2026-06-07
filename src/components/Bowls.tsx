import { useState, useCallback, useRef, useEffect } from 'react';
import BrandName from './BrandName';

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
    tag: 'Plátano, crema de cacahuete y leche condensada. La receta brasileña de toda la vida. Si no lo has probado, no sabes lo que te pierdes.',
    ings: ['açaí', 'granola 0% azúcar', 'crema cacahuete', 'leche condensada', 'leche en polvo', 'plátano'],
    img: '/assets/d02aecb644.webp',
    alt: 'Bowl Brasil',
  },
  tropical: {
    num: '03 / 05',
    name: 'TROPICAL',
    tag: 'Piña, mango, kiwi y crema de maracuyá. El más fresco de la carta. Y el que más fotos se lleva.',
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
  const [switching, setSwitching] = useState(false);
  const touchRef = useRef<{ startX: number; startY: number } | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef<string | null>(null);

  const select = useCallback((key: string) => {
    if (key === pendingRef.current) return;
    pendingRef.current = key;
    setSwitching(true);
    setTimeout(() => {
      setActive(key);
      setSwitching(false);
      pendingRef.current = null;
    }, 250);
  }, []);

  const goNext = useCallback(() => {
    const idx = keys.indexOf(active);
    if (idx < keys.length - 1) select(keys[idx + 1]);
  }, [active, select]);

  const goPrev = useCallback(() => {
    const idx = keys.indexOf(active);
    if (idx > 0) select(keys[idx - 1]);
  }, [active, select]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current = { startX: e.touches[0].clientX, startY: e.touches[0].clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.startX;
    const dy = e.changedTouches[0].clientY - touchRef.current.startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchRef.current = null;
  };

  // Auto-scroll tabs container so the active tab is visible
  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;
    const tab = container.querySelector<HTMLElement>(`[data-bowl="${active}"]`);
    if (!tab) return;
    const scrollLeft = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }, [active]);

  const b = bowls[active];
  const activeIdx = keys.indexOf(active);

  return (
    <section className="bowls" id="bowls" aria-label="Nuestros bowls">
      <div className="bowls-head">
        <div>
          <span className="eyebrow reveal">La carta</span>
          <h2 className="reveal d1">Lo que <span className="acc">servimos</span></h2>
        </div>
        <p className="reveal d2">Cinco bowls, cinco rollos distintos. Recetas propias, ingredientes frescos y ninguno está de relleno.</p>
      </div>

      <div className="bowl-tabs" ref={tabsRef} role="tablist" aria-label="Selector de bowl">
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

      <div
        className="bowl-stage"
        id="bowlStage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className={`bowl-img${switching ? ' switching' : ''}`}>
          <img src={b.img} alt={b.alt} width={560} height={560} decoding="async" />
        </div>
        <div className="bowl-dots" aria-hidden="true">
          {keys.map((key, i) => (
            <button
              key={key}
              className={`bowl-dot${i === activeIdx ? ' active' : ''}`}
              onClick={() => select(key)}
              aria-label={bowls[key].name}
            />
          ))}
          <span className="bowl-swipe-hint">← Desliza →</span>
        </div>
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
      </div>
    </section>
  );
}
