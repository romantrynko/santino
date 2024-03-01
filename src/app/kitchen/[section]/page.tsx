'use client';

import { KitchenMenuList } from '@/constants/menuList';
import { useParams, usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import MenuSectionPageContent from '@/app/pageContent/MenuSectionPageContent';
import RouteButton from '@/components/RouteButton';
import { cn } from '@/utils/utils';
import { useScreenSize } from '@/utils/hooks/useScreenSize';

const KitchenMenuPage = () => {
  const { section } = useParams();
  const pathname = usePathname();
  const { isPortrait, isMobile } = useScreenSize();

  // const buttonProps = useMemo(() => {
  //   switch (pathname) {
  //     case '/kitchen/desserts':
  //       return { text: 'Гарячі напої', route: '/bar/hot_drinks' };
  //     case '/kitchen/appetizer':
  //       return { text: 'Міцний алкоголь', route: '/bar/strong_alcohol' };
  //     case '/kitchen/mangal_menu':
  //       return { text: 'Гарніри', route: '/kitchen/side_dishes' };
  //     case '/kitchen/salads':
  //       return { text: 'Напої', route: '/bar/non_alcohol_drinks' };
  //     case '/kitchen/main_dishes':
  //       return { text: 'Вино', route: '/bar/wine' };
  //     case '/kitchen/soups':
  //       return { text: 'Для дітей', route: '/kitchen/for_kids' };
  //     case '/kitchen/hot_appetizer':
  //       return { text: 'Вино', route: '/bar/wine' };
  //     case '/kitchen/side_dishes':
  //       return { text: 'Салати', route: '/kitchen/salads' };
  //     case '/bar/non_alcohol_drinks':
  //       return { text: 'Міцний алкоголь', route: '/bar/strong_alcohol' };
  //     default:
  //       return;
  //   }
  // }, [pathname]);

  const data = useMemo(
    () => KitchenMenuList[section as keyof typeof KitchenMenuList]?.data,
    [section]
  );

  const title = useMemo(
    () => KitchenMenuList[section as keyof typeof KitchenMenuList]?.name,
    [section]
  );

  return (
    <div className="font-kurale bg-beige h-min-[100vh]">
      {/* {buttonProps && (
        <RouteButton
          text={buttonProps.text}
          route={buttonProps.route}
          containerClassName={cn("bottom-4 w-auto px-2 right-[180px]", {
            'right-[180px]': isPortrait,
            'right-[120px]': isMobile
          })}
        />
      )} */}
      <RouteButton
        text={'Головна'}
        route={'/'}
        containerClassName={cn("bottom-20 left-4 w-[200px]", {
          "w-[200px] px-8": isPortrait,
          'w-20': isMobile
        })}
      />

      <MenuSectionPageContent
        data={data}
        title={title}
      />
    </div>
  );
};

export default KitchenMenuPage;
