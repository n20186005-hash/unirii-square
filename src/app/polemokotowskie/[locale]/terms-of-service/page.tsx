import { setRequestLocale } from 'next-intl/server';
import TermsOfServiceClient from './TermsOfServiceClient';

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsOfServiceClient />;
}
