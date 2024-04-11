import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import clsxm from '@/lib/clsxm';

export const metadata: Metadata = {
  title: 'EcoWise',
  description: 'Save the Planet Together',
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
    <html lang='id' className='scroll-smooth'>
      <body className={clsxm(poppins.variable)}>{children}</body>
    </html>
  );
}
