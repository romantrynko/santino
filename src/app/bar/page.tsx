'use client';

import MenuSectionButton from '@/components/MenuSectionButton';
import { barSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import React from 'react';
import RouteButton from '@/components/RouteButton/RouteButton';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import NavigationBar from '@/components/NavigationBar';

const BarPageContent = () => {
  const { isMobile, isPortrait } = useScreenSize();

  return (
    <div className="flex bg-light-blue h-[100vh]">
      <div
        className={cn('flex flex-col w-full h-full font-kurale', {
          'w-full': isMobile
        })}>
        <RouteButton
          text={'Головна'}
          route={'/'}
        />
        <RouteButton
          text={'Кухня'}
          route={'/kitchen'}
          containerClassName={cn('bottom-[130px] h-20 right-4 px-4', {
            'bottom-[130px] h-20 right-2 px-4': isPortrait,
            'bottom-[100px] w-14 h-14 right-2': isMobile
          })}
        />
        <PageHeader
          title="Бар"
          containerClassName="fixed h-40 bg-light-blue "
          innerContainerClassName="bg-logo-small-green bg-contain bg-left bg-no-repeat p-2"
          titleClassName="font-extralight tracking-widest"
          isSection
        />
        <NavigationBar
          wrapperClassName={cn(
            'flex flex-col w-full  min-h-[calc(100vh-180px)] gap-4 mt-[180px] p-2'
          )}
        />
      </div>
    </div>
  );
};

export default BarPageContent;
