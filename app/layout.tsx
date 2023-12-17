import React from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import NavMenu, { appMaxWidth } from '~/ui/navbar';
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
          <div className="app-container sm-content-pt">
            <main className={appMaxWidth}>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
