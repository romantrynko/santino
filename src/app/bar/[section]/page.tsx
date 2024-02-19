'use client';

import { useParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { BarMenuList } from '@/constants/menuList';
import MenuSectionPageContent from '@/app/pageContent/MenuSectionPageContent';

const MenuSectionPage = () => {
  const { section } = useParams();

  const data = BarMenuList[section as keyof typeof BarMenuList]?.data;

  const title = useMemo(() => {
    return BarMenuList[section as keyof typeof BarMenuList].name;
  }, [section]);

  return (
    <MenuSectionPageContent
      data={data}
      title={title}
    />
  );
};

export default MenuSectionPage;
