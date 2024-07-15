import '@/styles/globals.css';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/home/Navigation';
import Footer from '@/components/home/Footer';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

import GoogleAdScript from '@/components/ad/GoogleAdScript';
import GoogleTrackingScript from '@/components/seo/GooleConsole';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Loading from './loading';

const ScrollToTop = dynamic(() => import('@/components/page/ScrollToTop'), { ssr: false });

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning className='base'>
      <body className='relative mx-auto flex min-h-screen flex-col text-black'>
        <div className="fixed h-screen w-full bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100" />
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
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
        <GoogleTrackingScript />
        <Analytics />
        <SpeedInsights />
        {/* <GoogleAdScript /> */}
      </body>
    </html>
  );
}
