import { useScreenSize } from '@/utils/hooks/useScreenSize';
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
  const { isMobile, isPortrait } = useScreenSize();

  return (
    <div
      key={item.name}
      className="flex min-h-[50px] w-full items-start justify-between border-slate-500 opacity-90">
      <div
        className={cn(
          'flex w-full justify-center flex-col text-[14px] mr-2 font-semibold',
          item.variants && 'mr-0',
        )}>
        {item.type && (
          <div
            className={cn("text-amber-700 text-[18px]", {
              'text-[18px]': isPortrait,
              'text-[14px]': isMobile
            })}>
            {item.type}
          </div>
        )}
        {item.country && (
          <div
            className={cn('font-light italic text-amber-700 text-[18px]', {
              'text-[18px]': isPortrait,
              'text-[14px]': isMobile
            })}>
            {item.country}
          </div>
        )}
        <div
          className={cn('flex w-full items-center mb-2 text-[18px]', {
            'border-b-2 border-dotted': Object.keys(item).length > 1,
            'border-none': Object.keys(item).length === 1 && item.name,
            'text-[18px] border-none': isPortrait,
            'text-[14px] border-none': isMobile,
          })}>
          {item.name}
        </div>
        {item.description && (
          <div className={cn("flex items-center text-[18px] font-light", {
            'text-[14px]': isPortrait || isMobile,
          })}>
            {item.description}
          </div>
        )}
        {item.variants && (
          <div className="flex flex-col w-full">
            {item.variants.map((variant, index) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                className={cn("flex w-full items-start justify-between text-[18px] mb-2 border-b-2 border-dotted", {
                  'text-[14px] border-none': isPortrait || isMobile,
                })}>
                {variant.name}
                <div className="flex justify-center items-start gap-3 text-[18px] ">
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
        <div className="flex items-start justify-center gap-3 text-[18px]">
          {item.weight && (
            <div className="flex items-start justify-center italic">
              {item.weight}
            </div>
          )}
          <div className="flex font-bold items-start justify-center">
            {item.price}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
