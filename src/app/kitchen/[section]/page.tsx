'use client';

import { KitchenMenuList } from '@/constants/menuList';
import { useParams } from 'next/navigation';
import React, { useMemo } from 'react';
import MenuSectionPageContent from '@/app/pageContent/MenuSectionPageContent';

const MenuSectionPage = () => {
  const { section } = useParams();

  const data = KitchenMenuList[section as keyof typeof KitchenMenuList]?.data;

  const title = useMemo(() => {
    return KitchenMenuList[section as keyof typeof KitchenMenuList].name;
  }, [section]);

  return (
    <MenuSectionPageContent
      data={data}
      title={title}
    />
  );
};

export default MenuSectionPage;
