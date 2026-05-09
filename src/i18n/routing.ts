import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['zh', 'en'],
  defaultLocale: 'zh',
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
    '/letnapark': {
      zh: '/letnapark',
      en: '/letnapark',
    },
    '/polemokotowskie': {
      zh: '/polemokotowskie',
      en: '/polemokotowskie',
    },
    '/unirii-square': {
      zh: '/unirii-square',
      en: '/unirii-square',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
