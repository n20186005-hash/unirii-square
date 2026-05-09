import { useTranslations } from 'next-intl';

export default function HotelsSection() {
  const t = useTranslations('hotels');

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

        <div className="grid sm:grid-cols-2 gap-4">
          {(t.raw('hotels') as Array<{name: string; desc: string; price: string}>).map((hotel, i) => (
            <div
              key={i}
              className="p-6 rounded-xl"
              style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {hotel.name}
                </h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                {hotel.desc}
              </p>
              <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {hotel.price}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 p-5 rounded-xl"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--water-500)" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <h4 className="font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                {t('supplements')}
              </h4>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {t('supplementsContent')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
