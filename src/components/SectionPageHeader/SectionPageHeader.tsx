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
      'flex fixed justify-center w-full py-6 px-6 bg-lime-800 z-10',
      containerClassName
    )}>
    <div
      className={cn(
        'flex justify-center items-center w-full border py-3',
        innerContainerClassName
      )}>
      <div
        className={cn(
          'text-[28px] text-white font-serif tracking-widest',
          textClassName
        )}>
        {title}
      </div>
    </div>
  </div>
);

export default SectionPageHeader;