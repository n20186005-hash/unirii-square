import './globals.css';
import { getLocale } from 'next-intl/server';
import type { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  return (
    <html lang={locale === 'en' ? 'en' : 'zh-CN'} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var preferences = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
            if (preferences.preferences && localStorage.getItem('theme') === 'dark') {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          } catch (e) {}
        ` }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
