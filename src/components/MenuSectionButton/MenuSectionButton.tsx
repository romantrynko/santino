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
    <div className={cn('inline-block', containerClassName)}>
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
