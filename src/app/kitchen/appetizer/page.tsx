'use client';

import BackButton from '@/components/BackButton/BackButton';
import SectionPageHeader from '@/components/SectionPageHeader/SectionPageHeader';
import React from 'react';

export type MenuItem = {
  name: string;
  description?: string;
  weight?: string;
  price?: string;
  variants?: {
    name: string;
    weight: string;
    price: string;
  }[];
};

const menuItems: MenuItem[] = [
  {
    name: 'ЗАКУСКА З ОСЕЛЕДЦЕМ ТА КАРТОПЛЕЮ І БУРЯКОМ, ЯЙЦЕМ ТА ЦИБУЛЕЮ',
    weight: '350',
    price: '190'
  },
  {
    name: 'ТАР ТАР З ЛОСОСЯ З ЛИМОННОЮ ЗАПРАВКОЮ',
    weight: '150',
    price: '360'
  },
  {
    name: 'СКИБКИ СЛАБОСОЛЕНОГО ЛОСОСЯ ІЗ ПРИПРАВЛЕНИМ ВЕРШКОВИМ МАСЛОМ',
    weight: '100/50',
    price: '340'
  },
  {
    name: 'САЛО СОЛЕНЕ З ГРІНКАМИ ТА ЧАСНИКОМ',
    weight: '100/30/50',
    price: '160'
  },
  {
    name: 'ВІТЕЛО ТОННАТО З КАПЕРСАМИ',
    weight: '100/100',
    price: '240'
  },
  {
    name: 'ПАШТЕТ ПЕЧІНКОВИЙ КАРАМЕЛІЗОВАНИЙ В ПОЄДНАННІ З ЯГІДНИМ МУСОМ',
    weight: '100/50/50',
    price: '200'
  },
  {
    name: 'ДУЕТ БРУСКЕТ НА БРІОШІ',
    weight: '',
    price: '220'
  },
  {
    name: 'РОЛИ З БАКЛАЖАНУ З ГОРІХОВО - СИРНОЮ ЗАПРАВКОЮ',
    weight: '150',
    price: '240'
  },
  {
    name: 'СИРНЕ ПЛАТО',
    description:
      'грісіні, камамбер, пармезан, ементаль та дор блю з медом - чілі',
    weight: '160/30/30',
    price: '290'
  },
  {
    name: 'СОЛІННЯ ДОМАШНЄ',
    description: 'квашені томати та огірки, крижавка та слива',
    weight: '350',
    price: '240'
  },
  {
    name: 'ОВОЧЕВА ТАРІЛКА',
    description: 'спілі томати,огірки та свіжа зелень з цибулею',
    weight: '300',
    price: '220'
  }
];

const AppetizerPage = () => {
  return (
    <div className="flex relative h-screen w-full flex-col gap-3 mb-10">
      <BackButton />
      <SectionPageHeader title="Закуски" />

      <div className="absolute top-40 z-1 pb-20">
        <div className="flex flex-col w-full mb-2 px-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="flex w-full justify-between font-sans mb-5 border-b pb-1">
              <div className="flex w-full flex-col text-[12px] font-semibold gap-2">
                {item.name}
                {item.description && (
                  <div className="text-[10px] font-light">
                    {item.description}
                  </div>
                )}
                {item.variants && (
                  <div className='flex flex-col w-full'>
                    {item.variants.map((variant) => (
                      <div
                        key={variant.name}
                        className="flex w-full justify-between font-sans mb-2">
                        {variant.name}
                        <div className="flex gap-3 font-serif text-[16px]">
                          <div className="font-light italic">{variant.weight}</div>
                          <div className="font-bold">{variant.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {item.price && <div className="flex gap-3 font-serif">
                {item.weight && <div className="italic">{item.weight}</div>}
                <div className="font-bold">{item.price}</div>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppetizerPage;
