import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { notFound } from 'next/navigation';

import Head from 'next/head';

import Navbar from '@/components/navbar';
import CookieConsent from '@/components/cookie';

import '@fontsource-variable/inter';

import '@fontsource/fira-sans/800.css';

import '../global.scss';

import locales from '../../locales.json';

export function generateStaticParams(): Array<{ locale: string }> {
  return locales.map(((locale: string): { locale: string } => ({
    locale: locale
  })));
}

export const dynamic = 'force-static';

export default async function RootLayout({
  children,
  params: {
    locale
  }
}: {
  children: React.ReactNode,
  params: any
}) {

  unstable_setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <Head>

        <meta charSet="utf-8" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <meta name="robots" content="none" />
        <meta name="googlebot" content="index,noarchive,noimageindex" />

        <meta name="image" content="/icon.svg" />

        <link rel="canonical" href="https://krahforst.dev/" />
    
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
                    
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
                    
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    
        <meta name="msapplication-TileColor" content="#1952BE" />
        <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
                    
        <link rel="manifest" href="/manifest.json" />
                    
        <meta name="theme-color" content="#1952BE" />

      </Head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          { children }
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );

};