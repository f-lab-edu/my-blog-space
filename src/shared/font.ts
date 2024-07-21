import { Roboto_Serif, Roboto, Noto_Sans_KR } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const roboto_serif = Roboto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  display: 'swap',
  variable: '--font-roboto-serif',
});

export const noto_sans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-noto-sans',
});
