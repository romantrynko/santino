'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/utils';
import { ScreenSizeProvider, useScreenSize } from '@/utils/hooks/useScreenSize';
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
  const { isPortrait, isMobile, isMobileInPortrait } = useScreenSize();

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
          <footer className="flex fixed bottom-4 left-0 w-full z-50 overflow-scroll scrollbar-none py-2 px-2 ">
            <NavigationBar
              wrapperClassName={cn("flex items-center gap-4 w-full", {
                'w-full': isMobileInPortrait
              })}
              outerContainerClassName={cn("bg-beige text-dark-green flex items-center justify-center z-10 overflow-hidden active:bg-slate-500 active:duration-300 shadow-sm shadow-dark-green active:opacity-100 rounded-[20px] px-4 py-2 cursor-pointer transition"
              )}

              innerContainerClassName="flex items-center justify-center p-2"
              buttonTextClassName={cn("text-[16px] whitespace-nowrap self-center text-dark-green font-kurale", {
                'text-[14px]': isMobileInPortrait,
                'text-[24px]': isPortrait
                })}
            />
          </footer>
        )}
      </body>
    </html>
  );
}
