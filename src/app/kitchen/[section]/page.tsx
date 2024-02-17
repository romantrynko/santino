'use client';

import BackButton from '@/components/RouteButton/RouteButton';
import MenuItem from '@/components/MenuItem';
import SectionPageHeader from '@/components/SectionPageHeader/SectionPageHeader';
import { KitchenMenuList, KitchenMenuSections, KitchenSectionsList } from '@/constants/menuList';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

const AppetizerPage = () => {
  const router = useRouter();
  const { section } = useParams();

  const data = KitchenMenuList[section as KitchenMenuSections];

  console.log(section);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="flex relative h-screen w-full flex-col gap-3 mb-10">
      <BackButton
        text={'Назад'}
        onClick={goBack}
      />

      <SectionPageHeader title={KitchenSectionsList[section as KitchenMenuSections]} />

      <div className="absolute top-[130px] z-1 pb-20">
        <div className="flex flex-col w-full mb-2 px-2 gap-2">
          {data.map((item) => (
            <MenuItem
              key={`${item.price}-${item.weight}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppetizerPage;
