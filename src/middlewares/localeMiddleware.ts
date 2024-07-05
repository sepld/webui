import { locales, defaultLocale, localePrefix } from '@/libs/i18n';
import createMiddleware from 'next-intl/middleware';

const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix
});

export default nextIntlMiddleware;


