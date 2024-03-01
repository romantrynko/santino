'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/utils';
import { ScreenSizeProvider } from '@/utils/hooks/useScreenSize';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/components/NavigationBar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Santino Menu'
// };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    setShowNavBar(
      pathname.startsWith('/kitchen/') || pathname.startsWith('/bar/')
    );
  }, [pathname]);

  return (
    <html lang="en">
      <body className={cn('h-[100%] bg-beige', inter.className)}>
        <ScreenSizeProvider>{children}</ScreenSizeProvider>
        {showNavBar && (
          <footer className="flex fixed bottom-4 left-0 w-full z-50 overflow-scroll scrollbar-none">
            <NavigationBar
              wrapperClassName="flex items-center gap-4 px-2"
              buttonTextClassName="text-[14px] whitespace-nowrap self-center text-beige font-bold font-kurale"
              outerContainerClassName="flex items-center justify-center px-3 py-1 bg-dark-green rounded"
              innerContainerClassName="flex items-center justify-center p-2"
            />
          </footer>
        )}
      </body>
    </html>
  );
}
