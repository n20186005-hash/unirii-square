import { pageMetadata, requireLocale, localePath } from '@/lib/site';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale, useMessages } from 'next-intl';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const messages = (await import('@/messages/' + locale + '.json')).default;
  const description = locale === 'en' ? 'Privacy, storage and external resources on Unirii Square Travel Guide.' : '联合广场旅行指南的隐私与外部资源说明。';
  return pageMetadata(locale, '/privacy-policy', messages.privacy.title + ' | Unirii Square', description);
}

function PrivacyContent() {
  const t = useTranslations('privacy');
  const ht = useTranslations('header');
  const locale = useLocale();
  const messages = useMessages() as any;
  const homeHref = localePath(locale);
  const sections = (messages?.privacy?.sections || []) as Array<{ heading: string; content: string }>;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <a
          href={homeHref}
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {ht('backToHome')}
        </a>

        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <p className="text-sm mb-10" style={{ color: 'var(--text-muted)' }}>{t('lastUpdated')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-8">
          {sections.map((section, i) => (
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
    </div>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyContent />;
}
