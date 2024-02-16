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
        className={cn('text-white font-bold py-2 px-4 rounded', textClassName)}
        onClick={onClick}
      >
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

export default MenuSectionButton;
