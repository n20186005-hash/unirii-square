'use client';

import { useTranslations } from 'next-intl';

export default function TermsOfServiceClient() {
  const t = useTranslations('terms');

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h1>
      <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
        {t('lastUpdated')}
      </p>

      <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

      <div className="space-y-8">
        {(t.raw('sections') as Array<{heading: string; content: string}>).map((section, i) => (
          <div key={i}>
            <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {section.heading}
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
