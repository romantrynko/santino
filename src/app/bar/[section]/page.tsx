'use client';

import { useParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { BarMenuList } from '@/constants/menuList';
import MenuSectionPageContent from '@/app/pageContent/MenuSectionPageContent';

const MenuSectionPage = () => {
  const { section } = useParams();

  const data = useMemo(
    () => BarMenuList[section as keyof typeof BarMenuList]?.data,
    [section]
  );

  const title = useMemo(
    () => BarMenuList[section as keyof typeof BarMenuList].name,
    [section]
  );

  return (
    <MenuSectionPageContent
      data={data}
      title={title}
    />
  );
};

export default MenuSectionPage;
