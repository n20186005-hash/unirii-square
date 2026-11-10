'use client';

import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const locale = useLocale();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => {
      try {
        const allowed = JSON.parse(localStorage.getItem('cookiePrefs') || '{}').preferences === true;
        if (!allowed) { localStorage.removeItem('theme'); setDark(document.documentElement.getAttribute('data-theme') === 'dark'); return; }
        const saved = localStorage.getItem('theme');
        setDark(saved === 'dark');
        document.documentElement.removeAttribute('data-theme');
        if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      } catch {}
    };
    sync();
    window.addEventListener('cookie-preferences-changed', sync);
    return () => window.removeEventListener('cookie-preferences-changed', sync);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try {
      const allowed = JSON.parse(localStorage.getItem('cookiePrefs') || '{}').preferences === true;
      if (allowed) localStorage.setItem('theme', next ? 'dark' : 'light');
      else localStorage.removeItem('theme');
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-md transition-colors"
      style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
      aria-label={locale === "en" ? "Toggle theme" : "切换主题"}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}
