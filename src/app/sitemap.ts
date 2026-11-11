import type { MetadataRoute } from 'next';
import { guideSlugs } from '@/content/guides';
import { SITE_ORIGIN, localePath } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/privacy-policy', '/terms-of-service', '/cookie-settings', ...guideSlugs.map((slug) => '/' + slug)];
  return paths.flatMap((path) => ['zh', 'en'].map((locale) => ({
    url: SITE_ORIGIN + localePath(locale, path),
    alternates: { languages: { zh: SITE_ORIGIN + localePath('zh', path), en: SITE_ORIGIN + localePath('en', path), 'x-default': SITE_ORIGIN + localePath('zh', path) } },
  })));
}
