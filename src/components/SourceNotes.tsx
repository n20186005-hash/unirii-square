import { useLocale } from 'next-intl';
import { CHECKED_ON, MAPS_URL } from '@/lib/site';
import { guideSources } from '@/content/guides';

export default function SourceNotes() {
  const en = useLocale() === 'en';
  const extra = [
    { title: 'Cluj Tourism — Matthias Corvinus monument', url: 'https://clujtourism.ro/en/portfolio/matthias-corvinus-monumental-complex-piata-unirii-union-square-cluj-napoca/' },
    { title: 'Cluj Tourism — Mirror Buildings', url: 'https://clujtourism.ro/en/portfolio/houses-of-roman-catholic-organization-mirror-buildings/' },
  ];
  return <section className="section-padding"><div className="max-w-4xl mx-auto guide-prose"><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Sources and editorial review' : '来源与编辑核对'}</h2><p>{en ? 'Unirii Square guide editors · ' : '联合广场指南编辑 · '}<time dateTime={CHECKED_ON}>{CHECKED_ON}</time></p><p>{en ? 'Google Maps rating and public-space hours are a dated snapshot, not the website’s own reviews or a guarantee of venue access.' : 'Google Maps 评分与公共空间时段为注明日期的快照，不是本站自行收集的评论，也不保证场馆内部开放。'}</p><ul className="list-disc pl-5 space-y-3">{[{ title: 'Google Maps — Piața Unirii, Cluj-Napoca', url: MAPS_URL }, guideSources.church, guideSources.palace, ...extra].map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>)}</ul></div></section>;
}
