import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // Always use the default locale for static assets
  localePrefix: 'as-needed',
});

export const config = {
  // Next.js 15.x compatible matcher
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
