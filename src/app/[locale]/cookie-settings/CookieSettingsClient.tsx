'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { localePath } from '@/lib/site';

export default function CookieSettingsClient() {
  const t = useTranslations('cookieSettings');
  const ht = useTranslations('header');
  const locale = useLocale();
  const [preferences, setPreferences] = useState(false);
  const [saved, setSaved] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    try { setPreferences(JSON.parse(localStorage.getItem('cookiePrefs') || '{}').preferences === true); } catch {}
  }, []);
  function save(enabled: boolean) {
    try {
      localStorage.setItem('cookiePrefs', JSON.stringify({ analytics: false, marketing: false, preferences: enabled }));
      if (!enabled) localStorage.removeItem('theme');
      window.dispatchEvent(new Event('cookie-preferences-changed'));
      setPreferences(enabled); setSaved(true); setFailed(false);
    } catch { setSaved(false); setFailed(true); }
  }
  return <main className="min-h-screen max-w-3xl mx-auto px-6 py-16">
    <a href={localePath(locale)} style={{ color: 'var(--accent)' }}>← {ht('backToHome')}</a>
    <h1 className="font-display text-3xl font-semibold mt-8 mb-4">{t('title')}</h1>
    <p className="mb-8">{t('description')}</p>
    <section className="rounded-xl border p-6 mb-5" style={{ borderColor: 'var(--border-color)' }}><h2 className="font-semibold mb-3">{t('essential.title')}</h2><p>{t('essential.description')}</p></section>
    <section className="rounded-xl border p-6 mb-5" style={{ borderColor: 'var(--border-color)' }}><label className="flex gap-4 items-start"><input type="checkbox" checked={preferences} onChange={(e) => { setPreferences(e.target.checked); setSaved(false); }} className="mt-1" /><span><span className="block font-semibold mb-3">{t('preferences.title')}</span>{t('preferences.description')}</span></label></section>
    {(['analytics', 'marketing'] as const).map((key) => <section key={key} className="rounded-xl border p-6 mb-5" style={{ borderColor: 'var(--border-color)' }}><h2 className="font-semibold mb-3">{t(key + '.title')}</h2><p>{t(key + '.description')}</p></section>)}
    <p className="my-6 text-sm">{t('consentDescription')}</p>
    <div className="flex flex-wrap gap-4"><button onClick={() => save(preferences)} className="border rounded-full px-5 py-3">{t('save')}</button><button onClick={() => save(false)} className="border rounded-full px-5 py-3">{t('rejectAll')}</button></div>
    <p role="status" className="mt-4">{failed ? (locale === 'en' ? 'Browser storage is unavailable; preferences were not saved.' : '浏览器存储不可用，设置未保存。') : saved ? t('saved') : ''}</p>
  </main>;
}
