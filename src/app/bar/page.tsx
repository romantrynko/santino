'use client';

import { PageHeader } from '@/components';
import MenuSectionButton from '@/components/MenuSectionButton';
import { barSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import React from 'react';
import RouteButton from '@/components/RouteButton/RouteButton';
import Link from 'next/link';

const BarPageContent = () => {
  const { isMobileInPortrait } = useScreenSize();

  return (
    <div
      className={cn('flex flex-col w-full h-full', {
        'w-full': isMobileInPortrait
      })}>
      <RouteButton
        text={'Головна'}
        route={'/'}
      />
      <RouteButton
        text={'Кухня'}
        route={'/kitchen'}
        containerClassName="bottom-[100px] w-14 h-14 right-4 bg-slate-400"
      />
      <PageHeader
        title="Бар"
        containerClassName="fixed h-40 bg-santino shadow-2xl shadow-slate-800"
        titleClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      <div
        className={cn('flex flex-col w-full h-full gap-2 mt-[180px] p-2', {})}>
        {barSectionButtons.map(({ name, section }, index) => (
          <Link
            href={`/bar/${section}`}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}>
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

export default BarPageContent;
