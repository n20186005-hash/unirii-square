import { useTranslations } from 'next-intl';

export default function TicketsSection() {
  const t = useTranslations('tickets');

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

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: t('outdoor'), price: t('outdoorPrice') },
            { name: t('lake'), price: t('lakePrice') },
            { name: t('plaza'), price: t('plazaPrice') },
            { name: t('activities'), price: t('activitiesPrice') },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl"
              style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
            >
              <h3 className="font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p className="text-2xl font-display font-semibold" style={{ color: 'var(--accent)' }}>
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 p-4 rounded-lg"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--water-500)" strokeWidth="2" className="mt-0.5 flex-shrink-0">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <div>
              <h4 className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {t('card')}
              </h4>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                {t('cardPrice')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
