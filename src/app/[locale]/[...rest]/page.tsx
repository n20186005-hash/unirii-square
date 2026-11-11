import { notFound } from 'next/navigation';
import { notFoundMetadata, requireLocale } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return notFoundMetadata(requireLocale((await params).locale));
}

export default function UnknownPage() { notFound(); }
