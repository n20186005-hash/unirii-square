import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { pageMetadata, requireLocale } from '@/lib/site';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = requireLocale((await params).locale);
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return pageMetadata(locale, '/', messages.meta.title, messages.meta.description);
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = requireLocale((await params).locale);
  setRequestLocale(locale);
  return <NextIntlClientProvider messages={await getMessages()}>{children}</NextIntlClientProvider>;
}
