import React from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import Footer from '~/ui/footer';
import NavMenu from '~/ui/navbar';
import { inter, newsreader } from './fonts';
import Providers from './providers';

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
