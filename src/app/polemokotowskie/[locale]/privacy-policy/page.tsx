import { setRequestLocale } from 'next-intl/server';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyPolicyClient />;
}
