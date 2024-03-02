'use client';

import NavigationBar from '@/components/NavigationBar';
import PageHeader from '@/components/PageHeader';
import RouteButton from '@/components/RouteButton';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import React from 'react';

const KitchenPageContent = () => {
  const { isMobileInPortrait, isPortrait } = useScreenSize();

  return (
    <div className="flex bg-yellow-light">
      <div
        className={cn('flex flex-col w-full h-full font-kurale ', {
          'w-full': isMobileInPortrait
        })}>
        <RouteButton
          text={'Головна'}
          route={'/'}
        />
        <RouteButton
          text={'Бар'}
          route={'/bar'}
          containerClassName={cn('bottom-[130px] w-20 h-20 right-4', {
            'bottom-[130px] w-20 h-20 right-2': isPortrait,
            'bottom-[100px] w-14 h-14 right-2': isMobileInPortrait
          })}
        />

        <PageHeader
          // title="Кухня"
          containerClassName={cn("fixed bg-yellow-light",
          {
            'h-60': isPortrait,
            'h-40 ': isMobileInPortrait
            })}
          innerContainerClassName={cn("bg-main-logo-2 bg-center bg-no-repeat p-2", {
            'bg-contain': isPortrait,
            'bg-cover': isMobileInPortrait
            })}
          titleClassName="font-extralight tracking-widest"
          isSection
        />

        <NavigationBar
          wrapperClassName={cn("text-[24px] flex flex-col w-full min-h-[calc(100vh-180px)] gap-4 mt-[180px] p-2",
          {
            'min-h-[calc(100vh-220px)] mt-[220px]': isPortrait,
            'mt-[180px]': isMobileInPortrait,
          })}
   
          buttonTextClassName={cn("text-14px",
          {
            'text-14px text-dark-green': isMobileInPortrait,
            'text-24px text-dark-green': isPortrait,
          }
          )}
        />
      </div>
    </div>
  );
};

export default KitchenPageContent;
