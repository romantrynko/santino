'use client';

import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import RouteButton from '@/components/RouteButton';
import { kitchenSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import React from 'react';

const KitchenPageContent = () => {
  const { isMobileInPortrait } = useScreenSize();

  return (
    <div className="flex bg-yellow">
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
          containerClassName="bottom-[100px] w-14 h-14 right-4"
        />

        <PageHeader
          title="Кухня"
          containerClassName="h-40 fixed bg-yellow"
          innerContainerClassName="bg-logo-small-green bg-contain bg-left bg-no-repeat p-2"
          titleClassName="font-extralight tracking-widest"
        />

        <div
          className={cn(
            'flex flex-col w-full h-full gap-4 mt-[180px] p-2',
            {}
          )}>
          {kitchenSectionButtons.map(({ name, section }, index) => (
            <Link
              href={`/kitchen/${section}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}>
              <MenuSectionButton
                delay={index * 150}
                textClassName="text-dark-green">
                {name.toUpperCase()}
              </MenuSectionButton>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenPageContent;
