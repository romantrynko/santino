'use client';

import BackButton from '@/components/BackButton/BackButton';
import MenuItem from '@/components/MenuItem';
import SectionPageHeader from '@/components/SectionPageHeader/SectionPageHeader';
import { appetizierList } from '@/constants/menuList';
import React from 'react';

const AppetizerPage = () => {
  return (
    <div className="flex relative h-screen w-full flex-col gap-3 mb-10">
      <BackButton />

      <SectionPageHeader title="Закуски" />

      <div className="absolute top-40 z-1 pb-20">
        <div className="flex flex-col w-full mb-2 px-2 gap-2">
          {appetizierList.map((item) => (
            <MenuItem key={`${item.price}-${item.weight}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppetizerPage;
