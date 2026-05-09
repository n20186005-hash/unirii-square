import { useTranslations } from 'next-intl';

export default function HoursSection() {
  const t = useTranslations('hours');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          <div
            className="p-6 rounded-xl"
            style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('outdoor')}
              </h3>
            </div>
            <p className="ml-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
              {t('outdoorTime')}
            </p>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('restrooms')}
              </h3>
            </div>
            <p className="ml-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
              {t('restroomsTime')}
            </p>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
          >
            <div className="flex items-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
              <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {t('trails')}
              </h3>
            </div>
            <p className="ml-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
              {t('trailsTime')}
            </p>
          </div>
        </div>

        <div
          className="mt-6 p-4 rounded-lg flex items-start gap-3"
          style={{ background: 'var(--tag-bg)', border: '1px solid var(--border-color)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="mt-0.5 flex-shrink-0">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t('tip')}
          </p>
        </div>
      </div>
    </section>
  );
}
