import { cn } from '@/utils/utils';
import React, { MouseEventHandler, useEffect, useState } from 'react';

type MenuSectionButtonProps = {
  children: React.ReactNode;
  containerClassName?: string;
  innerContainerClassName?: string;
  textClassName?: string;
  onClick?: (path: string) => void;
  delay?: number;
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
        `flex justify-center items-center bg-gradient-to-r  shadow-md shadow-slate-400 from-zinc-300 to-zinc-600 p-3 rounded-[30px] active:scale-[98%] active:duration-150 transition duration-200 ease-in ${
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
            'text-center text-[24px] font-serif font-light text-slate-100',
            textClassName
          )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuSectionButton;
