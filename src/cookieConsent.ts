import { useEffect, useState } from 'react';

// Consentimiento de cookies (RGPD/LSSI) conectado a Google Consent Mode v2.
// El valor por defecto ('denied') se fija en index.html ANTES de cargar GTM.
// Aquí solo lo actualizamos cuando el usuario elige en el banner.
export const COOKIE_KEY = 'acai-cookies-v1';
export type Consent = 'accepted' | 'rejected' | null;

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(COOKIE_KEY);
    return v === 'accepted' || v === 'rejected' ? v : null;
  } catch {
    return null;
  }
}

// Traslada la decisión a Google Consent Mode. Si GTM no cargó (bloqueado por
// un adblock, por ejemplo), simplemente no hace nada.
function applyToConsentMode(value: 'accepted' | 'rejected') {
  const gtag = (window as any).gtag;
  if (typeof gtag !== 'function') return;
  const v = value === 'accepted' ? 'granted' : 'denied';
  gtag('consent', 'update', {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v,
  });
}

export function setConsent(value: 'accepted' | 'rejected') {
  try { localStorage.setItem(COOKIE_KEY, value); } catch { /* modo privado: no persiste */ }
  applyToConsentMode(value);
  window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
}

// Hook para reaccionar en vivo al cambio de consentimiento.
export function useConsent(): Consent {
  const [consent, setLocal] = useState<Consent>(getConsent);
  useEffect(() => {
    const handler = () => setLocal(getConsent());
    window.addEventListener('cookie-consent', handler);
    return () => window.removeEventListener('cookie-consent', handler);
  }, []);
  return consent;
}
