import React from 'react';

export type IMenuItem = {
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

const MenuItem = ({ item }: { item: IMenuItem }) => {
  return (
    <div
      key={item.name}
      className="flex w-full justify-between font-sans mb-5 border-b pb-1">
      <div className="flex w-full flex-col text-[12px] r-2font-semibold gap-2">
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
  )
}

export default MenuItem