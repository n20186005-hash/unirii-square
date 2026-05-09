import { useTranslations } from 'next-intl';

export default function RouteSection() {
  const t = useTranslations('route');

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

        <p className="text-lg mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('overview')}
        </p>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{ background: 'var(--border-color)' }}
          />

          <div className="space-y-8">
            {(t.raw('steps') as string[]).map((step, i) => (
              <div key={i} className="relative flex items-start gap-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{ background: 'var(--accent)' }}
                >
                  <span className="text-white text-sm font-bold">{i + 1}</span>
                </div>
                <div
                  className="flex-1 p-4 rounded-lg"
                  style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
                >
                  <p className="text-base" style={{ color: 'var(--text-primary)' }}>
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            游览补充
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {(t.raw('supplements') as string[]).map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
