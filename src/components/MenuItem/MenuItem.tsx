import { cn } from '@/utils/utils';
import React from 'react';

export type IMenuItem = {
  name: string;
  type?: string;
  description?: string;
  weight?: string;
  price?: string;
  variants?: {
    name: string;
    weight: string;
    price: string;
  }[];
};

const MenuItem = ({ item }: { item: IMenuItem }) => {
  return (
    <div
      key={item.name}
      className="flex min-h-[50px] w-full items-start justify-between font-sans border-slate-500 p-3 px-2 opacity-90">
      <div
        className={cn(
          'flex w-full justify-center flex-col text-[14px] mr-8 font-semibold ',
          item.variants && 'mr-0'
        )}>
        {item.type && (
          <div className="text-[18px] text-orange-400">{item.type}</div>
        )}
        {item.name}
        {item.description && (
          <div className="text-[12px] font-light">{item.description}</div>
        )}
        {item.variants && (
          <div className="flex flex-col w-full">
            {item.variants.map((variant) => (
              <div
                key={variant.name}
                className="flex w-full items-center justify-between font-sans mb-2">
                {variant.name}
                <div className="flex justify-center items-center gap-3 font-serif text-[16px]">
                  <div className="font-light italic">{variant.weight}</div>
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
  );
};

export default MenuItem;
