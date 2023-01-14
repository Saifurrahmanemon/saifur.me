import { Inter } from '@next/font/google';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import 'styles/globals.css';

const interVariable = Inter();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
