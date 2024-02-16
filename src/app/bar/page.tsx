'use client';

import BackButton from '@/components/BackButton/BackButton';
import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const buttons = [
  { value: 13, name: 'Міцний алкоголь', path: '/strong_alcohol' },
  { value: 14, name: 'Вино', path: '/wine' },
  { value: 15, name: 'КОКТЕЙЛІ', path: '/coctails' },
  { value: 16, name: 'КОКТЕЙЛІ БЕЗАЛКОГОЛЬНІ', path: '/non_alcohol_coctails' },
  { value: 17, name: 'Напої безалкогольні', path: '/non_alcohol_drinks' },
  { value: 18, name: 'Пиво', path: '/beer' }
];

const BarPageContent = () => {
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
      <BackButton />
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

export default BarPageContent;
