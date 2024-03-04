'use client';

import { KitchenMenuList } from '@/constants/menuList';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '@/utils/utils';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { ButtonTint, RouteButton } from '@/components';
import { MenuSectionPageContent } from '@/app/pageContent';

const KitchenMenuPage = () => {
  const { section } = useParams();
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const { isMobile } = useScreenSize();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

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
      <RouteButton
        text={'Головна'}
        route={'/'}
        containerClassName={cn('bottom-[100px] left-2 w-[100px]', {
          'w-20': isMobile
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

export default KitchenMenuPage;
