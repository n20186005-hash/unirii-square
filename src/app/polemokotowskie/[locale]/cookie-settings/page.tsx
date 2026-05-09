import { setRequestLocale } from 'next-intl/server';
import CookieSettingsClient from './CookieSettingsClient';

export default async function CookieSettingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CookieSettingsClient />;
}
