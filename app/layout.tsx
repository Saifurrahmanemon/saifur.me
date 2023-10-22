import React from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import NavMenu, { navMaxWidth } from '~/ui/navbar';
import Providers from './providers';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <NavMenu />
          <div className="app-container">
            <main className={navMaxWidth}>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
