/**
 * Imagen responsive.
 *
 * Cada foto de /assets existe en dos tamaños: `foo.webp` (hasta 1600 px) y
 * `foo-800.webp` (para móvil). Este componente monta el srcset para que el
 * navegador elija. Sin esto, un móvil de 375 px descargaba la versión de
 * 1600 px — cuatro veces los píxeles que necesita, y el 88% del tráfico del
 * sitio es móvil.
 *
 * `priority` marca la imagen que es LCP (el hero): se carga con prioridad alta
 * y sin lazy. El resto va en lazy.
 */
interface PhotoProps {
  /** Ruta de la variante grande, p. ej. /assets/acai-granada-hero.webp */
  src: string;
  alt: string;
  /** Dimensiones reales de la variante grande. Reservan espacio y evitan CLS. */
  width?: number;
  height?: number;
  /** true para el hero de la página (el elemento LCP). */
  priority?: boolean;
  className?: string;
  /** Ancho que ocupa la imagen en pantalla. Por defecto, todo el ancho. */
  sizes?: string;
}

export default function Photo({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes = '100vw',
}: PhotoProps) {
  // /assets/foo.webp -> /assets/foo-800.webp
  const movil = src.replace(/\.webp$/, '-800.webp');
  const srcSet = `${movil} 800w, ${src} 1600w`;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={className}
    />
  );
}
