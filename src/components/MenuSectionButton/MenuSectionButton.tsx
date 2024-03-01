import { cn } from '@/utils/utils';
import React, { useEffect, useMemo, useState } from 'react';

type MenuSectionButtonProps = {
  children: React.ReactNode;
  containerClassName?: string;
  innerContainerClassName?: string;
  textClassName?: string;
  onClick?: () => void;
  delay?: number;
};

const MenuSectionButton = ({
  children,
  containerClassName,
  innerContainerClassName,
  textClassName,
  onClick,
  delay
}: MenuSectionButtonProps) => {
  const [show, setShow] = useState(false);

  const isMangalButton = useMemo(() => children === 'МАНГАЛ МЕНЮ', [children]);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={cn(
        `flex justify-center items-center cursor-pointer active:scale-[98%] active:duration-150 transition duration-200 ease-in ${
          show ? 'opacity-100' : 'opacity-0'
        }`,
        containerClassName
      )}
      onClick={onClick}>
      <div
        className={cn(
          'flex justify-center items-center  h-full w-full py-4',
          innerContainerClassName
        )}>
        <div
          className={cn(
            'text-center text-[24px] font-light',
            textClassName,
            isMangalButton && 'text-beige bg-dark-green px-5 py-2 rounded'
          )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MenuSectionButton;
