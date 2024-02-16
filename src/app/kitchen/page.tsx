'use client';

import BackButton from '@/components/BackButton/BackButton';
import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const buttons = [
  { value: 1, name: 'Закуски', path: '/kitchen/appetizer' },
  { value: 2, name: 'Салати', path: '/kitchen/salads' },
  { value: 3, name: 'Супи', path: '/kitchen/soups' },
  { value: 4, name: 'Гарячі закуски', path: '/kitchen/hot_appetizer' },
  { value: 5, name: 'Гарніри', path: '/kitchen/side_dishes' },
  { value: 6, name: 'Десерти', path: '/kitchen/desserts' },
  { value: 7, name: 'Паста', path: '/kitchen/pasta' },
  { value: 8, name: 'Основні страви', path: '/kitchen/main_dishes' },
  { value: 9, name: 'Для дітей', path: '/kitchen/for_kids' },
  { value: 10, name: 'Гарячі напої', path: '/kitchen/hot_drinks' },
  { value: 11, name: 'Мангал меню', path: '/kitchen/mangal_menu' },
  { value: 12, name: 'Соуси', path: '/kitchen/souces' },
];

const KitchenPageContent = () => {
  const { isMobileInPortrait } = useScreenSize();

  const router = useRouter();

  const handleButtonClick = useMemo(
    () => (path: string) => {
      setTimeout(() => {
        router.push(path);
      }, 300);
    },
    [router]
  );

  return (
    <div
      className={cn('flex flex-col w-full h-full p-2', {
        'w-full': isMobileInPortrait
      })}>
        <BackButton/>
      <PageHeader
        containerClassName="h-40 bg-santino-header"
        textClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      <div className={cn('flex flex-col w-full h-full gap-2 mt-2', {})}>
        {buttons.map(({ name, path }) => (
          <MenuSectionButton
            key={path}
            containerClassName="bg-amber-950 p-4 rounded transition duration-300 ease-in-out cursor-pointer active:bg-amber-800 active:transform active:translate-1 active:duration-300 active:ease-in-out"
            textClassName="text-[24px] font-serif font-light text-amber-100 "
            onClick={() => handleButtonClick(path)}>
            {name}
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default KitchenPageContent;
