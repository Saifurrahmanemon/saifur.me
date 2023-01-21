'use client';

import React from 'react';
import ThemeProviders from '~/utils/theme-providers';

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProviders>{children}</ThemeProviders>;
}

export default Providers;
