'use client';

import { PageHeader } from '@/components';
import BackButton from '@/components/BackButton/BackButton';
import MenuSectionButton from '@/components/MenuSectionButton';
import { barSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

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
        title="Бар"
        containerClassName="h-40 bg-santino"
        titleClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      <div className={cn('flex flex-col w-full h-full gap-2 mt-2', {})}>
        {barSectionButtons.map(({ name, path }) => (
          <MenuSectionButton
          textClassName="text-[18px]"
            key={path}
            onClick={() => handleButtonClick(path)}>
            {name.toUpperCase()}
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default BarPageContent;
