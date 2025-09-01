import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'vi'] as const;
export const defaultLocale = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale: locale as string,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
