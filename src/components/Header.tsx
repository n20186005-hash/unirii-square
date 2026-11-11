'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { localePath } from '@/lib/site';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const home = localePath(locale);
  const solid = scrolled || !['/', '/zh', '/en'].includes(pathname);
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: solid ? 'var(--bg-secondary)' : 'rgba(15,32,21,.6)', borderBottom: solid ? '1px solid var(--border-color)' : 'none', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="min-h-16 flex items-center justify-between gap-3">
          <a href={home} className="font-display text-lg font-semibold" style={{ color: solid ? 'var(--text-primary)' : '#fff' }}>Unirii Square</a>
          <div className="flex items-center gap-2"><ThemeToggle /><LanguageToggle /></div>
        </div>
        <nav aria-label={t('navigation')} className="flex flex-wrap gap-x-5 gap-y-2 pb-3 text-xs sm:text-sm" style={{ color: solid ? 'var(--text-secondary)' : '#fff' }}>
          {(['nearby', 'gallery', 'reviews', 'map'] as const).map((section) => <a key={section} href={`${home}#${section}`} className="hover:underline">{t(section)}</a>)}
        </nav>
      </div>
    </header>
  );
}
