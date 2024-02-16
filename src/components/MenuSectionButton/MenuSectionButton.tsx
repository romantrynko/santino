import { cn } from '@/utils/utils';
import React from 'react';

type MenuSectionButtonProps = {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  onClick?: (path: string) => void;
};

const MenuSectionButton = ({
  children,
  containerClassName,
  textClassName,
  onClick
}: MenuSectionButtonProps) => {
  return (
    <div className={cn('inline-block bg-amber-950 p-4 rounded transition duration-300 ease-in-out cursor-pointer active:bg-amber-800 active:transform active:translate-1 active:duration-300 active:ease-in-out', containerClassName)}>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={cn('text-white rounded', textClassName)}
        onClick={onClick}>
        <div className='border border-white py-4'>
          <div className="text-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuSectionButton;
