import { useTranslations } from 'next-intl';

export default function PhotoSpotsSection() {
  const t = useTranslations('photoSpots');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(t.raw('spots') as Array<{name: string; desc: string}>).map((spot, i) => (
            <div
              key={i}
              className="p-5 rounded-xl"
              style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ background: 'var(--tag-bg)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {spot.name}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {spot.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-5 rounded-xl"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--autumn-500)" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div>
              <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                {t('tips')}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('tipsContent')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
