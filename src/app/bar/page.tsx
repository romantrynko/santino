'use client';

import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import React from 'react';
import RouteButton from '@/components/RouteButton/RouteButton';
import {  NavigationBar, PageHeader } from '@/components';

const BarPageContent = () => {
  const { isMobile, isPortrait } = useScreenSize();

  return (
    <div className="flex bg-beige h-[80vh]">
      <div
        className={cn('flex flex-col w-full h-full font-kurale', {
          'w-full': isMobile
        })}>
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
