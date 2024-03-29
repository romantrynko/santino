import React, { Ref, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/utils';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { barSectionButtons, kitchenSectionButtons } from '@/constants/menuList';
import { usePathname } from 'next/navigation';
import { MenuSectionButton } from '@/components';

type NavigationBarProps = Readonly<{
  wrapperClassName?: string;
  buttonTextClassName?: string;
  innerContainerClassName?: string;
  outerContainerClassName?: string;
  onClick?: () => void;
}>;

const NavigationBar = ({
  wrapperClassName,
  buttonTextClassName,
  innerContainerClassName,
  outerContainerClassName,
  onClick
}: NavigationBarProps) => {
  const { isPortrait, isMobileInPortrait } = useScreenSize();
  const pathname = usePathname();

  const selectedButtonRef = useRef<HTMLDivElement>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    selectedButtonRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  }, [pathname]);

  const buttons = useMemo(() => {
    switch (true) {
      case pathname.startsWith('/kitchen'):
        return kitchenSectionButtons;
      case pathname.startsWith('/bar'):
        return barSectionButtons;
      default:
        return [];
    }
  }, [pathname]);

  const isNotSectionPage = useMemo(
    () => pathname !== '/kitchen' && pathname !== '/bar',
    [pathname]
  );

  return (
    <div className={cn('flex flex-row w-full', wrapperClassName)}>
      {buttons.map(({ name, path }, index) => (
        <Link
          ref={
            pathname === path
              ? (selectedButtonRef as unknown as Ref<HTMLAnchorElement>)
              : undefined
          }
          href={path}
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}>
          <MenuSectionButton
            onClick={onClick}
            selected={pathname === path}
            delay={index * 150}
            innerContainerClassName={cn(innerContainerClassName)}
            containerClassName={cn(outerContainerClassName)}
            textClassName={cn(
              'text-dark-green',
              {
                'text-[36px]': isPortrait,
                'text-[24px]': isMobileInPortrait
              },
              buttonTextClassName
            )}>
            {isNotSectionPage
              ? name.charAt(0).toUpperCase() + name.slice(1)
              : name.toUpperCase().toString()}
          </MenuSectionButton>
        </Link>
      ))}
    </div>
  );
};

export default NavigationBar;
