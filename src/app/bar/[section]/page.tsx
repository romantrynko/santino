'use client';

import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { BarMenuList } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { ButtonTint, RouteButton } from '@/components';
import { MenuSectionPageContent } from '@/app/pageContent';

const BarMenuPage = () => {
  const { section } = useParams();
  const [show, setShow] = useState(false);

  const pathname = usePathname();
  const { isMobileInPortrait } = useScreenSize();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // const buttonProps = useMemo(() => {
  //   switch (pathname) {
  //     case '/bar/cocktails':
  //       return { text: 'Десерти', route: '/kitchen/desserts' };
  //     case '/bar/wine':
  //       return { text: 'Мангал меню', route: '/kitchen/mangal_menu' };
  //     case '/bar/beer':
  //       return { text: 'Мангал меню', route: '/kitchen/mangal_menu' };
  //     case '/bar/strong_alcohol':
  //       return { text: 'Закуски', route: '/kitchen/appetizer' };
  //     case '/bar/hot_drinks':
  //       return { text: 'Десерти', route: '/kitchen/desserts' };
  //     case '/bar/soft_drinks':
  //       return { text: 'Основні страви', route: '/kitchen/main_dishes' };
  //     default:
  //       return;
  //   }
  // }, [pathname]);

  const data = useMemo(
    () => BarMenuList[section as keyof typeof BarMenuList]?.data,
    [section]
  );

  const title = useMemo(
    () => BarMenuList[section as keyof typeof BarMenuList]?.name,
    [section]
  );

  return (
    <div className="flex font-kurale h-auto">
      {/* {buttonProps && (
        <RouteButton
          text={buttonProps.text}
          route={buttonProps.route}
          containerClassName={cn("bottom-4 w-auto right-[180px]", {
            'right-[180px] px-8': isPortrait,
            'right-[120px] px-2': isMobileInPortrait
          })}
        />
      )} */}
      <RouteButton
        text={'Головна'}
        route={'/'}
        containerClassName={cn('bottom-[100px] left-2 w-[100px]', {
          'w-20': isMobileInPortrait
        })}
      />

      <MenuSectionPageContent
        opacity={show ? 'opacity-100' : 'opacity-0'}
        data={data}
        title={title}
      />
      <ButtonTint />
    </div>
  );
};

export default BarMenuPage;
