'use client';

import BackButton from '@/components/BackButton/BackButton';
import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { kitchenSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

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
      <BackButton />

      <PageHeader
        containerClassName="h-40 bg-santino-header"
        textClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      
      <div className={cn('flex flex-col w-full h-full gap-3 mt-2', {})}>
        {kitchenSectionButtons.map(({ name, path }, index) => (
          <MenuSectionButton
            key={path}
            delay={index * 300}
            textClassName='text-[18px]'
            onClick={() => handleButtonClick(path)}>
            {name.toUpperCase()}
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default KitchenPageContent;
