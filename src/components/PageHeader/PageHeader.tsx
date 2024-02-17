import { cn } from '@/utils/utils';
import React from 'react';

interface PageHeaderProps {
  title?: string;
  containerClassName?: string;
  textClassName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = "Сантіно",
  containerClassName,
  textClassName,
  ...props
}) => {
  return (
    <div
      className={cn("w-full bg-cover bg-center flex justify-center items-center h-20 p-2 rounded-[24px] opacity-75",
        containerClassName
      )}
      {...props}>
      <div className={cn('inline-flex text-2xl font-serif', textClassName)}>{title}</div>
    </div>
  );
};

export default PageHeader;
