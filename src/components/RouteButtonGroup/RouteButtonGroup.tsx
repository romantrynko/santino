import React, { useCallback } from 'react';
import { RouteButton } from '@/components';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { usePathname, useRouter } from 'next/navigation';

const RouteButtonGroup = () => {
  const { isMobile, isMobileInPortrait, isPortrait } = useScreenSize();
  const router = useRouter();
  const pathname = usePathname();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className='flex'>
      {/* section page */}
      {(pathname.startsWith('/kitchen/') || pathname.startsWith('/bar/')) && (
        <div className='font-kurale'>
          <RouteButton
            text={'Головна'}
            route={'/'}
            containerClassName={cn('bottom-[100px] left-2 w-[100px]', {
              'w-20': isMobile
            })}
          />
          <RouteButton
            containerClassName={cn('bottom-[100px]')}
            text={'Назад'}
            onClick={goBack}
          />
        </div>
      )}
      {/* kitchen */}
      {pathname === '/kitchen' && (
        <div className='flex flex-col w-full h-full font-kurale'>
          <RouteButton
            text={'Головна'}
            route={'/'}
          />
          <RouteButton
            text={'Напої'}
            route={'/bar'}
            containerClassName={cn('bottom-[130px] w-20 h-20 right-4', {
              'bottom-[130px] w-20 h-20 right-2': isPortrait,
              'bottom-[100px] w-14 h-14 right-2': isMobileInPortrait
            })}
          />
        </div>
      )}
      {/* bar */}
      {pathname === '/bar' && (
        <div className='flex flex-col w-full h-full font-kurale'>
          <RouteButton
            text={'Головна'}
            route={'/'}
          />
          <RouteButton
            text={'Страви'}
            route={'/kitchen'}
            containerClassName={cn('bottom-[130px] h-20 right-4 px-4', {
              'bottom-[130px] h-20 right-2 px-4': isPortrait,
              'bottom-[100px] w-14 h-14 right-2': isMobile
            })}
          />
        </div>
      )}
    </div>
  );
};

export default RouteButtonGroup;
