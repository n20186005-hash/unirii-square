import { useTranslations } from 'next-intl';
import { MAPS_URL } from '@/lib/site';

export default function Reviews() {
  const t = useTranslations('reviews');
  return (
    <section id="reviews" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">{t('title')}</h2>
        <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{t('declaration')}</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full px-5 py-3 border" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>{t('moreReviews')} ↗</a>
      </div>
    </section>
  );
}
