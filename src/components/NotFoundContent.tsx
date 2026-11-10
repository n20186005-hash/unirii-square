import { getLocale } from 'next-intl/server';

export default async function NotFoundContent() {
  const en = (await getLocale()) === 'en';
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm mb-4" style={{ color: 'var(--accent)' }}>404</p>
      <h1 className="font-display text-4xl font-semibold mb-6">{en ? 'Page not found' : '找不到这个页面'}</h1>
      <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>{en ? 'This address does not match a guide. Return to Unirii Square to browse the available places.' : '这个地址没有对应的指南，请回到联合广场首页查看景点内容。'}</p>
      <nav aria-label={en ? 'Home pages' : '返回首页'} className="flex flex-wrap gap-6">
        <a href="/" className="underline">中文首页</a>
        <a href="/en" className="underline">English home</a>
      </nav>
    </main>
  );
}
