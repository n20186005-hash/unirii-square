'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

function CookieToggle({
  label,
  description,
  enabled,
  onToggle,
  locked,
  badge,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  locked?: boolean;
  badge?: string;
}) {
  return (
    <div
      className="flex items-start justify-between gap-4 p-5 sm:p-6 rounded-xl"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            {label}
          </h3>
          {badge && (
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
            >
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{description}</p>
      </div>
      {!locked && (
        <button
          onClick={onToggle}
          className={`cookie-toggle flex-shrink-0 ${enabled ? 'active' : ''}`}
          aria-label={`Toggle ${label}`}
        />
      )}
      {locked && (
        <div className={`cookie-toggle flex-shrink-0 ${enabled ? 'active' : ''} opacity-60 cursor-not-allowed`} />
      )}
    </div>
  );
}

function CookieItem({
  label,
  description,
  enabled,
  onToggle,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="flex items-start justify-between gap-4 p-4 sm:p-5 rounded-lg ml-4 sm:ml-6"
      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex-1">
        <h4 className="font-display text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
          {label}
        </h4>
        <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`cookie-toggle flex-shrink-0 ${enabled ? 'active' : ''}`}
        aria-label={`Toggle ${label}`}
      />
    </div>
  );
}

export default function CookieSettingsClient() {
  const t = useTranslations('cookieSettings');
  const ht = useTranslations('header');
  const locale = useLocale();
  const homeHref = locale === 'it' ? '/' : `/${locale}`;

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
      if (prefs.analytics) setAnalytics(true);
      if (prefs.marketing) setMarketing(true);
      if (prefs.preferences) setPreferences(true);
    } catch {}
  }, []);

  function handleSave() {
    localStorage.setItem('cookiePrefs', JSON.stringify({ analytics, marketing, preferences }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleRejectAll() {
    setAnalytics(false);
    setMarketing(false);
    setPreferences(false);
    localStorage.setItem('cookiePrefs', JSON.stringify({ analytics: false, marketing: false, preferences: false }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <a
          href={homeHref}
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {ht('backToHome')}
        </a>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>{t('description')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4 mb-8">
          <CookieToggle
            label={t('essential.title')}
            description={t('essential.description')}
            enabled={true}
            onToggle={() => {}}
            locked={true}
            badge={t('essential.badge')}
          />

          <div>
            <CookieToggle
              label={t('analytics.title')}
              description={t('analytics.description')}
              enabled={analytics}
              onToggle={() => setAnalytics(!analytics)}
            />
            {t.raw('analytics.items') && Array.isArray(t.raw('analytics.items')) && (
              <div className="mt-2 space-y-2">
                {(t.raw('analytics.items') as Array<{ name: string; description: string; status: string }>).map((item, i) => (
                  <CookieItem
                    key={i}
                    label={item.name}
                    description={item.description}
                    enabled={analytics}
                    onToggle={() => setAnalytics(!analytics)}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <CookieToggle
              label={t('preferences.title')}
              description={t('preferences.description')}
              enabled={preferences}
              onToggle={() => setPreferences(!preferences)}
            />
            {t.raw('preferences.items') && Array.isArray(t.raw('preferences.items')) && (
              <div className="mt-2 space-y-2">
                {(t.raw('preferences.items') as Array<{ name: string; description: string; status: string }>).map((item, i) => (
                  <CookieItem
                    key={i}
                    label={item.name}
                    description={item.description}
                    enabled={preferences}
                    onToggle={() => setPreferences(!preferences)}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <CookieToggle
              label={t('marketing.title')}
              description={t('marketing.description')}
              enabled={marketing}
              onToggle={() => setMarketing(!marketing)}
            />
            {t.raw('marketing.items') && Array.isArray(t.raw('marketing.items')) && (
              <div className="mt-2 space-y-2">
                {(t.raw('marketing.items') as Array<{ name: string; description: string; status: string }>).map((item, i) => (
                  <CookieItem
                    key={i}
                    label={item.name}
                    description={item.description}
                    enabled={marketing}
                    onToggle={() => setMarketing(!marketing)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>{t('consentDescription')}</p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            {saved ? t('saved') : t('save')}
          </button>
          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            style={{ background: 'var(--card-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
          >
            {t('rejectAll')}
          </button>
        </div>
      </div>
    </div>
  );
}
