import { useTranslations } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />
        
        <div className="space-y-6">
          {t('description').split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div
            className="p-6 rounded-xl"
            style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {t.raw('visitGuide.items').map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <polyline points="9 11 12 14 22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                  <span className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-6 rounded-xl"
            style={{ background: 'var(--card-bg)', boxShadow: 'var(--card-shadow)' }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {t.raw('alsoKnownAs.items').map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--autumn-500)" stroke="none" className="mt-0.5 flex-shrink-0">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
