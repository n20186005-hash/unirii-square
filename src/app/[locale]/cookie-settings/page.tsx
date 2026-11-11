import { pageMetadata, requireLocale } from '@/lib/site';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = requireLocale((await params).locale);
  const messages = (await import('@/messages/' + locale + '.json')).default;
  const description = locale === 'en' ? 'Manage optional theme storage on this browser.' : '管理此浏览器的可选主题存储。';
  return pageMetadata(locale, '/cookie-settings', messages.cookieSettings.title + ' | Unirii Square', description);
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
