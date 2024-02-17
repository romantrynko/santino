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
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = 'Сантіно',
  containerClassName,
  titleClassName,
  innerContainerClassName,
  subtitle,
  subtitleClassName,
  menu,
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full bg-cover bg-center flex justify-center items-center h-20 p-3 rounded-[30px] opacity-75',
        containerClassName
      )}
      {...props}>
      <div
        className={cn(
          'flex flex-col justify-center items-center border border-white w-full h-full rounded-[20px] backdrop-blur',
          innerContainerClassName
          )}>
        <div className={cn('inline-flex text-2xl font-serif', titleClassName, subtitle && 'border-b')}>
          {title}
        </div>
          {subtitle && (
            <div
              className={cn('inline-flex font-serif', subtitleClassName)}>
              {subtitle}
            </div>
          )}
          {
            menu && <div className="flex  justify-center text-white mt-7 font-serif text-[25px] border px-5 rounded">Меню</div>
          }
      </div>
    </div>
  );
};

export default PageHeader;
