import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getGuide, guideSlugs, guideSources } from '@/content/guides';
import { CHECKED_ON, localePath, notFoundMetadata, pageMetadata, requireLocale } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NearbyGuides from '@/components/NearbyGuides';

export function generateStaticParams() { return guideSlugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  const locale = requireLocale(value);
  const guide = getGuide(slug, locale);
  if (!guide) return notFoundMetadata(locale);
  return pageMetadata(locale, '/' + slug, guide.copy.metaTitle, guide.copy.description);
}

export default async function GuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  const locale = requireLocale(value);
  const guide = getGuide(slug, locale);
  if (!guide) notFound();
  setRequestLocale(locale);
  const c = guide.copy;
  const en = locale === 'en';
  const map = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(guide.mapQuery);
  const sourceLinks = (ids: string[]) => <p className="text-sm mt-4">{en ? 'Source: ' : '来源：'}{ids.map((id, i) => <span key={id}>{i > 0 ? ' · ' : ''}<a href={guideSources[id].url} target="_blank" rel="noopener noreferrer">{guideSources[id].title}</a></span>)}</p>;
  return <>
    <Header />
    <main className="guide-prose">
      <header className="pt-40 pb-12 px-6" style={{ background: 'var(--bg-tertiary)' }}>
        <div className="max-w-4xl mx-auto">
          <a href={localePath(locale)} className="text-sm">{en ? '← Unirii Square' : '← 联合广场首页'}</a>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold mt-6 mb-5 leading-tight">{c.title}</h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>{c.subtitle}</p>
          <p className="text-sm">{en ? 'Unirii Square guide editors · Checked ' : '联合广场指南编辑 · 核对日期 '}<time dateTime={CHECKED_ON}>{CHECKED_ON}</time></p>
          <a href={map} target="_blank" rel="noopener noreferrer">{en ? 'Find this place on Google Maps ↗' : '在 Google Maps 搜索此地点 ↗'}</a>
        </div>
      </header>
      <article className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Why visit' : '为什么值得停留'}</h2><p>{c.lead}</p></section>
        <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Plan your visit' : '参观建议'}</h2><ul className="list-disc pl-5 space-y-3">{c.tips.map((x) => <li key={x}>{x}</li>)}</ul></section>
        <section><h2 className="font-display text-2xl font-semibold mb-5">{en ? 'What to look for' : '观察重点'}</h2><div className="grid sm:grid-cols-3 gap-5">{c.highlights.map((x) => <div key={x.title} className="border rounded-xl p-5" style={{ borderColor: 'var(--border-color)' }}><h3 className="font-semibold mb-3">{x.title}</h3><p className="text-sm">{x.text}</p></div>)}</div>{sourceLinks(guide.sources.filter((x) => !['hours', 'tickets'].includes(x)))}</section>
        <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'At a glance' : '基本信息'}</h2><dl>{c.facts.map(([label, value]) => <div key={label} className="grid sm:grid-cols-[10rem_1fr] gap-2 py-3 border-b" style={{ borderColor: 'var(--border-color)' }}><dt className="font-semibold">{label}</dt><dd>{value}</dd></div>)}</dl></section>
        {c.hours && <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Opening hours' : '开放时间'}</h2><p>{c.hours}</p>{sourceLinks(['hours'])}</section>}
        {c.admission && <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Admission' : '展览门票'}</h2><dl>{c.admission.map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-3 py-3 border-b" style={{ borderColor: 'var(--border-color)' }}><dt>{label}</dt><dd className="font-semibold">{value}</dd></div>)}</dl><p className="mt-4">{c.admissionNote}</p>{sourceLinks(['tickets'])}</section>}
        {c.sections.map((s) => <section key={s.heading}><h2 className="font-display text-2xl font-semibold mb-4">{s.heading}</h2>{s.paragraphs.map((p) => <p key={p}>{p}</p>)}{s.sources && sourceLinks(s.sources)}</section>)}
        <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Suggested observation sequence' : '建议的观察顺序'}</h2><p className="text-sm">{en ? 'An editorial sequence, not a timed or surveyed walking route.' : '这是编辑建议，不是计时或实测步行路线。'}</p><ol className="list-decimal pl-5 space-y-3">{c.route.map((x) => <li key={x}>{x}</li>)}</ol></section>
        <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Visitor notes' : '游览须知'}</h2><ul className="list-disc pl-5 space-y-3">{c.notices.map((x) => <li key={x}>{x}</li>)}</ul></section>
        <section><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Questions before you go' : '出发前常见问题'}</h2>{c.faq.map(([q, a]) => <div key={q} className="mb-6"><h3 className="font-semibold mb-2">{q}</h3><p>{a}</p></div>)}</section>
        <section id="location"><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Location and map' : '地址与地图'}</h2><p>{c.address}</p><p><a href={map} target="_blank" rel="noopener noreferrer">{en ? 'Search this place and plan your actual route on Google Maps' : '在 Google Maps 搜索地点并规划实际路线'}</a></p></section>
        <section id="sources"><h2 className="font-display text-2xl font-semibold mb-4">{en ? 'Sources and editorial check' : '来源与编辑核对'}</h2><p>{en ? 'Historical and visitor information checked on ' : '历史与参观信息核对日期：'}<time dateTime={CHECKED_ON}>{CHECKED_ON}</time>{en ? '. Recheck operational information with the venue before travelling.' : '。运营信息请在出发前向场馆复核。'}</p><ul className="list-disc pl-5 space-y-3">{guide.sources.map((id) => <li key={id}><a href={guideSources[id].url} target="_blank" rel="noopener noreferrer">{guideSources[id].title}</a></li>)}</ul></section>
      </article>
      <NearbyGuides />
    </main>
    <Footer />
  </>;
}
