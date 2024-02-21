import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/utils';
import { ScreenSizeProvider } from '@/utils/hooks/useScreenSize';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Santino Menu'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('h-[100%] bg-beige', inter.className)}>
        <ScreenSizeProvider>{children}</ScreenSizeProvider>
      </body>
    </html>
  );
}
