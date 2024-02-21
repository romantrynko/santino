import { cn } from '@/utils/utils';
import React from 'react';

export type IMenuItem = {
  name?: string;
  type?: string;
  country?: string;
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
      className="flex min-h-[50px] w-full items-start justify-between  border-slate-500 opacity-90">
      <div
        className={cn(
          'flex w-full justify-center flex-col text-[14px] mr-2 font-semibold ',
          item.variants && 'mr-0'
        )}>
        {item.type && (
          <div className="text-[16px] text-amber-700">{item.type}</div>
        )}
        {item.country && (
          <div className="text-[16px] font-light italic text-amber-700">
            {item.country}
          </div>
        )}
        <div className="flex w-full items-center mb-2 text-[16px]">
          {item.name}
        </div>
        {item.description && (
          <div className="flex items-center text-[16px] font-light">{item.description}</div>
        )}
        {item.variants && (
          <div className="flex flex-col w-full">
            {item.variants.map((variant, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className="flex w-full items-start justify-between text-[14px] mb-2">
                {variant.name}
                <div className="flex justify-center items-start gap-3 text-[20px]">
                  <div className="flex font-light italic items-start justify-center">
                    {variant.weight}
                  </div>
                  <div className="flex font-bold items-start justify-center">
                    {variant.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {item.price && (
        <div className="flex items-start justify-center gap-3 text-[20px]">
          {item.weight && <div className="flex items-start justify-center italic">{item.weight}</div>}
          <div className="flex font-bold items-start justify-center">{item.price}</div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
