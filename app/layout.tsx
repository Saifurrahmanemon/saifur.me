import { Metadata } from 'next';
import React from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import { domain } from '~/lib/user_details';
import Footer from '~/ui/footer';
import NavMenu from '~/ui/navbar';
import { inter, sofia } from './fonts';
import Providers from './providers';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const title = 'Saifur Rahman Emon';
const description =
  'Software developer with an immense love for Programming, Books, Bike.';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${domain}`),
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: `https://${domain}`,
    siteName: title,
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    title: title,
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${inter.className} ${sofia.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <NavMenu />
          <main className="relative app-container sm-content-pt min-h-[calc(100vh-130px)] mb-20 sm:mb-auto">
            <div className="app-max-w">{children}</div>
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
