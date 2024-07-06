import { locales, defaultLocale } from '@/lib/i18n';
import { localePrefix } from '@/app/navigation';

import createMiddleware from 'next-intl/middleware';

const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix
});

export default nextIntlMiddleware;


