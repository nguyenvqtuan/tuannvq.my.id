import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';
import { getServerSession } from 'next-auth';
import { Analytics } from '@vercel/analytics/react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import './globals.css';

import Layouts from '@/src/common/components/layouts';
import ThemeProviderContext from '@/src/common/stores/theme';
import NextAuthProvider from '@/src/components/SessionProvider';
import { METADATA } from '@/src/common/constants/metadata';
import { onestSans } from '@/src/common/styles/fonts';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.DOMAIN || ''
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  },
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const messages = await getMessages();
  const session = await getServerSession();

  return (
    <html suppressHydrationWarning={true}>
      {/* <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="91c868c5-2a89-4a1d-b292-56c40ea30137"

        // data-domains="satriabahari.site"
        // data-website-id="8e2c9f27-a12b-48ca-8130-808ebe377aca"
      ></Script> */}
      <body className={onestSans.className}>
        <NextTopLoader
          color="#4ade80"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #4ade80,0 0 5px #86efac"
        />
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider session={session}>
            <ThemeProviderContext>
              <Layouts>{children}</Layouts>
            </ThemeProviderContext>
          </NextAuthProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
