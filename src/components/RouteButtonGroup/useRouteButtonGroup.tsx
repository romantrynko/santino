import { usePathname, useRouter } from 'next/navigation';
import { RouteButton } from '@/components';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { useCallback } from 'react';
import { cn } from '@/utils/utils';

const useRouteButtons = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isMobile, isPortrait } = useScreenSize();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  const getButtons = () => {
    if (pathname.startsWith('/kitchen/') || pathname.startsWith('/bar/')) {
      return (
        <div className="font-kurale">
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
      );
    }

    if (pathname === '/kitchen') {
      return (
        <div className="flex flex-col w-full h-full font-kurale">
          <RouteButton
            text={'Головна'}
            route={'/'}
          />
          <RouteButton
            text={'Напої'}
            route={'/bar'}
            containerClassName={cn('bottom-[130px] w-20 h-20 right-4', {
              'bottom-[130px] w-20 h-20 right-2': isPortrait,
              'bottom-[100px] w-14 h-14 right-2': isMobile
            })}
          />
        </div>
      );
    }

    if (pathname === '/bar') {
      return (
        <div className="flex flex-col w-full h-full font-kurale">
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
      );
    }

    return null;
  };

  return getButtons;
};

export default useRouteButtons;
