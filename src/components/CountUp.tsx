import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  /** Valor final a mostrar (p. ej. 4.8) */
  value: number;
  /** Decimales a mostrar (por defecto 1) */
  decimals?: number;
  /** Duración de la animación en ms (por defecto 1400) */
  duration?: number;
  /** Clase CSS aplicada al elemento */
  className?: string;
}

/**
 * Muestra un número que cuenta desde 0 hasta `value` cuando entra en pantalla.
 * Usa coma decimal (formato es-ES) y respeta prefers-reduced-motion.
 */
export default function CountUp({ value, decimals = 1, duration = 1400, className }: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(value * eased);
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplay(value);
              }
            };
            requestAnimationFrame(animate);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toFixed(decimals).replace('.', ',')}
    </span>
  );
}
