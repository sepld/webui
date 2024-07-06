import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/lib/i18n.ts');


/** @type {import('next').NextConfig} */
const nextConfig = {

};

export default withNextIntlConfig(nextConfig);