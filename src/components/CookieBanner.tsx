import { useState, useEffect } from 'react';
import { getConsent, setConsent } from '../cookieConsent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Solo se muestra si el usuario no ha elegido todavía.
    if (!getConsent()) setVisible(true);
  }, []);

  const choose = (value: 'accepted' | 'rejected') => {
    setConsent(value);
    setVisible(false);
  };

  const goCookies = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).__navigateTo('/cookies');
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          Usamos cookies propias técnicas y de análisis (Google Analytics) para entender
          cómo se usa la web y mejorarla. Tú decides.{' '}
          <a href="/cookies" onClick={goCookies}>Más información</a>.
        </p>
        <div className="cookie-banner-btns">
          <button type="button" className="cookie-btn cookie-btn--ghost" onClick={() => choose('rejected')}>
            Rechazar
          </button>
          <button type="button" className="cookie-btn cookie-btn--solid" onClick={() => choose('accepted')}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
