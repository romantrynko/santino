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
    <div className="flex relative h-min-[100vh] w-full flex-col gap-3 ">
      <RouteButton
        text={'Назад'}
        onClick={goBack}
      />

      <SectionPageHeader title={title} />

      <div className="flex h-min-[80vh] h-max-content pb-20 w-full mt-[130px] bg-bg-leaves bg-contain bg-fixed">
        <div className="flex flex-col w-full mb-2 px-2">
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
