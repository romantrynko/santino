'use client';

import { PageHeader } from '@/components';
import MenuSectionButton from '@/components/MenuSectionButton';
import RouteButton from '@/components/RouteButton';
import { kitchenSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import React from 'react';

const KitchenPageContent = () => {
  const { isMobileInPortrait } = useScreenSize();

  return (
    <div
      className={cn('flex flex-col w-full h-full p-2', {
        'w-full': isMobileInPortrait
      })}>
      <RouteButton
        text={'Головна'}
        route={'/'}
      />
      <RouteButton
        text={'Бар'}
        route={'/bar'}
        containerClassName="bottom-[120px] w-14 h-14 right-4 bg-slate-400"
      />

      <PageHeader
        title="Кухня"
        containerClassName="h-40 bg-santino"
        titleClassName="font-extralight text-white text-[70px] tracking-widest"
      />

      <div className={cn('flex flex-col w-full h-full gap-4 mt-2', {})}>
        {kitchenSectionButtons.map(({ name, section }, index) => (
          <Link
            href={`/kitchen/${section}`}
            key={section}>
            <MenuSectionButton
              delay={index * 150}
              textClassName="text-[18px]">
              {name.toUpperCase()}
            </MenuSectionButton>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KitchenPageContent;
