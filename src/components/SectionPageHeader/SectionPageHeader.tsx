import { cn } from '@/utils/utils';
import React from 'react';

type SectionPageHeaderProps = {
  title: string;
  containerClassName?: string;
  innerContainerClassName?: string;
  textClassName?: string;
};

const SectionPageHeader = ({
  title,
  containerClassName,
  innerContainerClassName,
  textClassName
}: SectionPageHeaderProps) => (
  <div
    className={cn(
      'flex fixed w-full p-4 h-[120px] z-10 shadow-md shadow-slate-400 justify-between',
      containerClassName
    )}>
    <div className="flex w-2/6 bg-logo-small-black bg-contain bg-no-repeat" />

    <div
      className={cn(
        'flex w-4/6 justify-end items-center',
        innerContainerClassName
      )}>
      <div
        className={cn(
          'text-[26px] tracking-widest',
          textClassName
        )}>
        {title}
      </div>
    </div>
  </div>
);

export default SectionPageHeader;
