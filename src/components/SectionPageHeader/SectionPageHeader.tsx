import { cn } from '@/utils/utils';
import React, { useMemo } from 'react';

type SectionPageHeaderProps = {
  title: string;
  containerClassName?: string;
  innerContainerClassName?: string;
  textClassName?: string;
  scrollPercentage?: number;
};

const SectionPageHeader = ({
  title,
  containerClassName,
  innerContainerClassName,
  textClassName,
  scrollPercentage
}: SectionPageHeaderProps) => {
  const computedWidthValue = useMemo(
    () => `calc(${scrollPercentage}% + 8px)`,
    [scrollPercentage]
  );

  return (
    <div
      className={cn(
        'flex fixed w-full p-4 h-[120px] z-10 shadow-md shadow-slate-400 justify-between bg-dark-green',
        containerClassName
      )}>
      <div className="flex w-2/6 bg-logo-small-yellow bg-contain bg-no-repeat" />

      <div
        className={cn(
          'flex w-4/6 justify-end items-center',
          innerContainerClassName
        )}>
        <div
          className={cn(
            'text-[26px] text-light-green text-end',
            textClassName
          )}>
          {title}
        </div>
      </div>
      <div
        style={{
          width: computedWidthValue
        }}
        className="absolute top-[-8px] left-[-8px] h-[calc(100%+8px)] bg-cyan-950 opacity-30 w-full"
      />
    </div>
  );
};

export default SectionPageHeader;
