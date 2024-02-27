import MenuItem from '@/components/MenuItem';
import RouteButton from '@/components/RouteButton';
import SectionPageHeader from '@/components/SectionPageHeader';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';
import { IMenuSectionPageContentProps } from './types';
import { cn } from '@/utils/utils';
import { useScreenSize } from '@/utils/hooks/useScreenSize';

const MenuSectionPageContent = ({
  data,
  title
}: IMenuSectionPageContentProps) => {
  const router = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);

  const { isMobile, isPortrait } = useScreenSize();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={cn("flex relative items-center w-full flex-col gap-3 bg-bg-leaves bg-auto bg-fixed")}>
      <RouteButton
        text={'Назад'}
        onClick={goBack}
      />

      <SectionPageHeader title={title} />

      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className={cn("flex flex-col items-center w-4/6 mb-2 px-2 gap-4 mt-[130px] pb-20 min-h-[calc(100vh-240px)]", {
          'w-5/6 ': isPortrait,
          'w-full': isMobile,
        })}>
        {data?.map((item, index) => (
          <MenuItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSectionPageContent;
