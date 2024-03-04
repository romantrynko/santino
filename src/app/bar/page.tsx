'use client';

import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import React from 'react';
import { NavigationBar, PageHeader } from '@/components';

const BarPageContent = () => {
  const { isMobile } = useScreenSize();

  return (
    <div className="flex bg-beige h-[80vh]">
      <div
        className={cn('flex flex-col w-full h-full font-kurale', {
          'w-full': isMobile
        })}>
        <PageHeader
          title="Напої"
          containerClassName="flex max-h-[120px] bg-light-green "
          innerContainerClassName="bg-logo-small-green bg-contain bg-left bg-no-repeat p-2"
          titleClassName="font-extralight tracking-widest"
          isSection
        />
        <NavigationBar
          wrapperClassName={cn('flex flex-col w-full gap-2 pt-7')}
        />
      </div>
    </div>
  );
};

export default BarPageContent;
