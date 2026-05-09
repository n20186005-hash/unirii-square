import { useTranslations } from 'next-intl';

export default function InfoSection() {
  const t = useTranslations('knowledge');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-12" style={{ background: 'var(--accent)' }} />

        <div className="space-y-16">
          {(t.raw('sections') as Array<{id: string; title: string; content: string}>).map((section, index) => (
            <div key={section.id} className="scroll-mt-24" id={section.id}>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-5xl font-display font-bold opacity-20"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {section.title}
                </h3>
              </div>
              <div className="ml-0 md:ml-20">
                {section.content.split('\n\n').map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-lg leading-relaxed mb-4"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
