import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
}
