import MenuItem from '@/components/MenuItem';
import RouteButton from '@/components/RouteButton';
import SectionPageHeader from '@/components/SectionPageHeader';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { IMenuSectionPageContentProps } from './types';

const MenuSectionPageContent = ({
  data,
  title
}: IMenuSectionPageContentProps) => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="flex relative h-screen w-full flex-col gap-3 mb-10">
      <RouteButton
        text={'Назад'}
        onClick={goBack}
      />

      <SectionPageHeader title={title} />

      <div className="absolute top-[130px] z-1 pb-20">
        <div className="flex flex-col w-full mb-2 px-2">
          {data.map((item) => (
            <MenuItem
              key={`${item.price}-${item.name}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSectionPageContent;
