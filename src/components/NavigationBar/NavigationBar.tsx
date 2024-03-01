import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/utils';
import MenuSectionButton from '../MenuSectionButton';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { kitchenSectionButtons } from '@/constants/menuList';

type NavigationBarProps = Readonly<{
  wrapperClassName?: string;
  buttonTextClassName?: string;
  innerContainerClassName?: string;
  outerContainerClassName?: string;
}>;

const NavigationBar = ({
  wrapperClassName,
  buttonTextClassName,
  innerContainerClassName,
  outerContainerClassName
}: NavigationBarProps) => {
  const { isPortrait, isMobileInPortrait } = useScreenSize();

  return (
    <div className={cn('flex flex-row w-full', wrapperClassName)}>
      {kitchenSectionButtons.map(({ name, section }, index) => (
        <Link
          href={`/kitchen/${section}`}
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}>
          <MenuSectionButton
            delay={index * 150}
            innerContainerClassName={cn(innerContainerClassName)}
            containerClassName={cn(outerContainerClassName)}
            textClassName={cn('text-dark-green', buttonTextClassName, {
              'text-[46px]': isPortrait,
              'text-[24px]': isMobileInPortrait
            })}>
            {name.toUpperCase()}
          </MenuSectionButton>
        </Link>
      ))}
    </div>
  );
};

export default NavigationBar;
