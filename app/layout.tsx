import { Inter, Sofia } from 'next/font/google';
import React from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import Footer from '~/ui/footer';
import NavMenu from '~/ui/navbar';
import Providers from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

const newsreader = Sofia({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-newsreader'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${inter.className} ${newsreader.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body>
        <Providers>
          <NavMenu />
          <main className="relative app-container sm-content-pt min-h-[calc(100vh-130px)]">
            <div className="app-max-w">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
