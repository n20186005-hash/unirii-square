import { useLocale } from 'next-intl';
import { getGuide, guideSlugs } from '@/content/guides';
import { localePath, requireLocale } from '@/lib/site';

export default function NearbyGuides() {
  const locale = requireLocale(useLocale());
  return (
    <section id="nearby" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-semibold mb-4">{locale === 'en' ? 'Explore the nearby places' : '深入附近地点'}</h2>
        <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{locale === 'en' ? 'Choose a church, a palace museum or another historic square. Each guide separates heritage from current visitor arrangements.' : '按兴趣选择教堂、宫殿博物馆或另一处历史广场，各专题区分遗产介绍与当下参观安排。'}</p>
        <div className="grid md:grid-cols-3 gap-5">
          {guideSlugs.map((slug) => {
            const guide = getGuide(slug, locale)!;
            return <a key={slug} href={localePath(locale, '/' + slug)} className="block rounded-xl border p-6 hover:shadow-md" style={{ borderColor: 'var(--border-color)', background: 'var(--card-bg)' }}>
              <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--accent)' }}>{guide.copy.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.copy.subtitle}</p>
              <span className="block mt-5 text-sm">{locale === 'en' ? 'Read the guide →' : '阅读专题 →'}</span>
            </a>;
          })}
        </div>
      </div>
    </section>
  );
}
