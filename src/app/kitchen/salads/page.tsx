'use client';

import BackButton from '@/components/BackButton/BackButton';
import SectionPageHeader from '@/components/SectionPageHeader/SectionPageHeader';
import React from 'react';
import { MenuItem } from '../appetizer/page';

const menuItems: MenuItem[] = [
  {
    name: 'ЦЕЗАР КЛАСИЧНИЙ',
    variants: [
      { name: '- З ШМАТОЧКАМИ КУРКИ', weight: '250', price: '240' },
      { name: '- З СЛАБОСОЛЕНИМ ЛОСОСЕМ', weight: '250', price: '280' },
      { name: '- З КРЕВЕТКОЮ', weight: '200', price: '300' }
    ]
  },
  {
    name: 'САЛАТ З КАПУСТИ ТА НАСІННЯ СОНЯХА',
    weight: '200',
    price: '180'
  },
  {
    name: 'САЛАТ ГРЕЦЬКИЙ З МІКСОМ ЗЕЛЕНІ',
    weight: '250',
    price: '220'
  },
  {
    name: 'САЛАТ ТЕПЛИЙ МЯСНИЙ З ОВОЧАМИ ТА СТЕБЛОМ САЛЕРИ',
    weight: '350',
    price: '126060'
  },
  {
    name: 'САЛАТ «CЛОВЯНСЬКИЙ»',
    weight: '200',
    price: '180'
  },
  {
    name: 'ЗЕЛЕНИЙ САЛАТ З БРОКОЛІ ТА СТРУЧКОВОЇ КВАСОЛІ З ГРЕЦЬКИМ ЙОГУРТОМ',
    weight: '350',
    price: '220'
  },
];

const SaladsPage = () => {
  return (
    <div className="flex relative h-screen w-full flex-col gap-3 mb-10">
      <BackButton />
      <SectionPageHeader title="Салати" />

      <div className="absolute top-40 z-1 pb-20 ">
        <div className="flex flex-col w-full mb-2 px-2 bg-salads bg-contain bg-no-repeat bg-left">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex w-full justify-between font-sans mb-5 border-b pb-1 ">
              <div className="flex w-full flex-col text-[12px] font-semibold gap-2">
                {item.name}
                {item.description && (
                  <div className="text-[10px] font-light">
                    {item.description}
                  </div>
                )}
                {item.variants && (
                  <div className="flex flex-col w-full">
                    {item.variants.map((variant) => (
                      <div
                        key={variant.name}
                        className="flex w-full justify-between font-sans mb-2">
                        {variant.name}
                        <div className="flex gap-3 font-serif text-[16px]">
                          <div className="font-light italic">
                            {variant.weight}
                          </div>
                          <div className="font-bold">{variant.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {item.price && (
                <div className="flex gap-3 font-serif">
                  {item.weight && <div className="italic">{item.weight}</div>}
                  <div className="font-bold">{item.price}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaladsPage;
