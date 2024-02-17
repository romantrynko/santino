import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { homePageSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const HomePageContent = () => {
  const { isMobileInPortrait } = useScreenSize();

  const router = useRouter();

  const handleButtonClick = useMemo(
    () => (path: string) => {
      setTimeout(() => {
        router.push(path);
      }, 300);
    },
    [router]
  );

  return (
    <div
      className={cn('flex flex-col w-full h-full p-2', {
        'w-full': isMobileInPortrait
      })}>
      <PageHeader
        containerClassName="h-40 bg-santino"
        textClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      <div className={cn('flex flex-1 flex-col w-full gap-4 mt-2', {})}>
        {homePageSectionButtons.map(({ name, path }, index) => (
          <MenuSectionButton
            key={path}
            delay={index * 300}
            containerClassName={cn('flex-1')}
            textClassName="text-[34px] font-serif font-light"
            onClick={() => handleButtonClick(path)}>
            {name}
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
