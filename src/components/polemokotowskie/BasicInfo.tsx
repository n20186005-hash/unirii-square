import { useTranslations } from 'next-intl';

export default function BasicInfo() {
  const t = useTranslations('basicInfo');

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
            { label: t('officialName'), value: t('officialNameValue') },
            { label: t('type'), value: t('typeValue') },
            { label: t('country'), value: t('countryValue') },
            { label: t('city'), value: t('cityValue') },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-lg"
              style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
            >
              <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                {item.label}
              </span>
              <p className="mt-1 font-medium" style={{ color: 'var(--text-primary)' }}>
                {item.value}
              </p>
            </div>
          ))}

          <div
            className="p-4 rounded-lg sm:col-span-2"
            style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
          >
            <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
              {t('address')}
            </span>
            <p className="mt-1 font-medium" style={{ color: 'var(--text-primary)' }}>
              {t('addressValue')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
