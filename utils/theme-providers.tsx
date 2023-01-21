/* eslint-disable no-unused-vars */
'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

function ThemeProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default ThemeProviders;
