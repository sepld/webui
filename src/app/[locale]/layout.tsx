import '@/styles/globals.css';

import { NextIntlClientProvider, useMessages } from 'next-intl';

import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/home/Navigation';
import { Suspense } from 'react';

import GoogleAdScript from '@/components/ad/GoogleAdScript';
import SeoScript from '@/components/seo/SeoScript';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Loading from './loading';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning className='dark'>
      <body className='relative mx-auto flex min-h-screen flex-col text-white'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Toaster
            position='top-center'
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'text-green-400',
                warning: 'text-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
          <Navigation />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
        <SeoScript />
        <Analytics/>
        <SpeedInsights/>
        <GoogleAdScript />
      </body>
    </html>
  );
}
