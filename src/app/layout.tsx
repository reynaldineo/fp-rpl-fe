import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import clsxm from '@/lib/clsxm';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsxm(poppins.variable)}>{children}</body>
    </html>
  );
}
