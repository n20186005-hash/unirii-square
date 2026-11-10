import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const SITE_ORIGIN = 'https://www.uniriisquare.com';
export const MAPS_URL = 'https://maps.app.goo.gl/87nWU22Zc5vprsCm9';
export const CHECKED_ON = '2026-11-10';
export const locales = ['zh', 'en'] as const;
export type SiteLocale = (typeof locales)[number];

export function requireLocale(locale: string): SiteLocale {
  if (locale !== 'zh' && locale !== 'en') notFound();
  return locale;
}

export function localePath(locale: string, path = '/') {
  const suffix = path === '/' ? '' : path;
  return `${locale === 'en' ? '/en' : ''}${suffix}` || '/';
}

export function pageMetadata(locale: SiteLocale, path: string, title: string, description: string): Metadata {
  const zh = `${SITE_ORIGIN}${localePath('zh', path)}`;
  const en = `${SITE_ORIGIN}${localePath('en', path)}`;
  const canonical = locale === 'en' ? en : zh;
  return {
    title,
    description,
    alternates: { canonical, languages: { zh, en, 'x-default': zh } },
    openGraph: { title, description, url: canonical, siteName: 'Unirii Square', locale: locale === 'zh' ? 'zh_CN' : 'en_US', type: 'website' },
  };
}
