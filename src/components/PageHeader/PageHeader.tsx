import { cn } from '@/utils/utils';
import React from 'react';

interface PageHeaderProps {
  title?: string;
  containerClassName?: string;
  titleClassName?: string;
  innerContainerClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  menu?: boolean;
  isSection?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  containerClassName,
  titleClassName,
  innerContainerClassName,
  subtitle,
  subtitleClassName,
  menu,
  isSection,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full relative bg-contain bg-no-repeat bg-center flex justify-center items-center flex-1 overflow-hidden',
        containerClassName
      )}
      {...props}>
      {isSection && title === 'Бар' && (
        <div className="absolute bg-bg-splat bg-left bg-cover h-80 w-40 right-[-110px]" />
      )}
      <div
        className={cn(
          'flex flex-col justify-center items-end  w-full h-full',
          innerContainerClassName
        )}>
        {title && (
          <div
            className={cn(
              'inline-flex text-[50px] text-dark-green',
              titleClassName,
              subtitle && 'border-b'
            )}>
            {title}
          </div>
        )}
        {subtitle && (
          <div className={cn('inline-flex ', subtitleClassName)}>
            {subtitle}
          </div>
        )}
        {menu && (
          <div className="flex  justify-center text-white mt-7  text-[25px] border px-5 rounded">
            Меню
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
