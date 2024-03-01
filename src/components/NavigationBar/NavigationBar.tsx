import React, { useMemo } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/utils';
import MenuSectionButton from '../MenuSectionButton';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { barSectionButtons, kitchenSectionButtons } from '@/constants/menuList';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  
  const buttons = useMemo(() => {
    switch (true) {
      case pathname.startsWith("/kitchen"):
        return kitchenSectionButtons;
      case pathname.startsWith("/bar"):
        return barSectionButtons;
      default:
        return [];
    }
  }, [pathname]);

  return (
    <div className={cn('flex flex-row w-full', wrapperClassName)}>
      {buttons.map(({ name, path }, index) => (
        <Link
          href={path}
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
