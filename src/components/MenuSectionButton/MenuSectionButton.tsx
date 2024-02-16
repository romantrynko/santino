import { cn } from '@/utils/utils';
import React, { MouseEventHandler, useEffect, useState } from 'react';

type MenuSectionButtonProps = {
  children: React.ReactNode;
  containerClassName?: string;
  innerContainerClassName?: string;
  textClassName?: string;
  onClick?: (path: string) => void;
  delay: number;
};

const MenuSectionButton = ({
  children,
  containerClassName,
  innerContainerClassName,
  textClassName,
  onClick,
  delay,
}: MenuSectionButtonProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClick) {
      onClick(event.currentTarget.dataset.path || '');
    }
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={cn(
        `flex justify-center items-center bg-amber-950 p-2 rounded-[30px] active:bg-amber-800 active:duration-300 transition duration-200 ease-in ${
          show ? 'opacity-100' : 'opacity-0'
        }`,
        containerClassName
      )}
      onClick={handleClick}>
      <div
        className={cn(
          'flex justify-center items-center border border-white h-full w-full rounded-[20px] py-6',
          innerContainerClassName
        )}>
        <div
          className={cn(
            'text-center text-[24px] font-serif font-light text-amber-100',
            textClassName
          )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuSectionButton;
