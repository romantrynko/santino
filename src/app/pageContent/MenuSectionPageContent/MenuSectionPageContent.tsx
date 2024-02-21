import MenuItem from '@/components/MenuItem';
import RouteButton from '@/components/RouteButton';
import SectionPageHeader from '@/components/SectionPageHeader';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useRef } from 'react';
import { IMenuSectionPageContentProps } from './types';

const MenuSectionPageContent = ({
  data,
  title
}: IMenuSectionPageContentProps) => {
  const router = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="flex relative w-full flex-col gap-3 bg-bg-leaves bg-auto bg-fixed">
      <RouteButton
        text={'Назад'}
        onClick={goBack}
      />

      <SectionPageHeader title={title} />

      <div
        ref={containerRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col w-full mb-2 px-2 gap-4 mt-[130px] pb-20 min-h-[calc(100vh-240px)]">
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
