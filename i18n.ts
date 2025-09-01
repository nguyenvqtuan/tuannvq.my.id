import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './src/services/locales';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  // Validate that the incoming `locale` parameter is valid
  // if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
