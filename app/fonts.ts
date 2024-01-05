import { Inter, Sofia } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const sofia = Sofia({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-sofia'
});
