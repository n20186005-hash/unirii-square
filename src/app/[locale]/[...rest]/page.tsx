import { notFound } from 'next/navigation';

export const metadata = { title: 'Page not found | Unirii Square', robots: { index: false, follow: false } };
export default function UnknownPage() { notFound(); }
