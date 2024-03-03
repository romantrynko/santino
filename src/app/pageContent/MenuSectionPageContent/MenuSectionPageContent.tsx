import MenuItem from '@/components/MenuItem';
import RouteButton from '@/components/RouteButton';
import SectionPageHeader from '@/components/SectionPageHeader';
import { useRouter } from 'next/navigation';
import React, { use, useCallback, useEffect, useRef, useState } from 'react';
import { IMenuSectionPageContentProps } from './types';
import { cn } from '@/utils/utils';
import { useScreenSize } from '@/utils/hooks/useScreenSize';

const MenuSectionPageContent = ({
  data,
  title,
  opacity
}: IMenuSectionPageContentProps) => {
  const router = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { isMobile, isPortrait } = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollTop =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);

      const scrollPercentage = Number(((scrollTop / maxScrollTop) * 100).toFixed(1));
      setScrollPosition(scrollPercentage);

      console.log('scrollPercentage', scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, []);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div
      className={`flex relative items-center w-full flex-col gap-3 bg-beige transition duration-300 ease-in ${opacity}`}>
      <RouteButton
        containerClassName={cn('bottom-[100px]')}
        text={'Назад'}
        onClick={goBack}
      />

      <SectionPageHeader
        title={title}
        scrollPercentage={scrollPosition}
      />
      <div
        className="flex w-full overflow-scroll px-2 "
        ref={containerRef as unknown as React.RefObject<HTMLDivElement>}>
        <div
          ref={listRef as unknown as React.RefObject<HTMLDivElement>}
          className={cn(
            'flex flex-col items-center w-4/6 mb-2 gap-4 mt-[130px] pb-[130px] min-h-[calc(100vh-240px)]',
            {
              'w-5/6 ': isPortrait,
              'w-full': isMobile
            }
          )}>
          {data?.map((item, index) => (
            <MenuItem
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSectionPageContent;
