'use client';

import { useTranslations } from 'next-intl';

export default function CookieSettingsClient() {
  const t = useTranslations('cookieSettings');
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
        {t('description')}
      </p>

      <div className="space-y-6">
        <div
          className="p-6 rounded-xl"
          style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {t('essential.title')}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                {t('essential.description')}
              </p>
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              {t('essential.badge')}
            </span>
          </div>
        </div>

        <div
          className="p-6 rounded-xl"
          style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {t('analytics.title')}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                {t('analytics.description')}
              </p>
            </div>
            <button
              onClick={() => setAnalytics(!analytics)}
              className={`cookie-toggle ${analytics ? 'active' : ''}`}
            />
          </div>
        </div>

        <div
          className="p-6 rounded-xl"
          style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {t('marketing.title')}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                {t('marketing.description')}
              </p>
            </div>
            <button
              onClick={() => setMarketing(!marketing)}
              className={`cookie-toggle ${marketing ? 'active' : ''}`}
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-8 px-6 py-3 rounded-lg font-medium transition-colors"
        style={{ background: saved ? 'var(--nature-500)' : 'var(--accent)', color: 'white' }}
      >
        {saved ? t('saved') : t('save')}
      </button>
    </div>
  );
}

import { useState } from 'react';
