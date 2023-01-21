import React from 'react';
import 'styles/globals.css';
import 'styles/tailwind.css';
import NavMenu from '~/ui/navbar';
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
          {children}
        </Providers>
      </body>
    </html>
  );
}
