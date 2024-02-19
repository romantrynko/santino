import { PageHeader } from '@/components';
import MenuSectionButton from '@/components/MenuSectionButton';
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
      router.push(path);
    },
    [router]
  );

  return (
    <div
      className={cn('flex flex-col h-[85vh] w-full p-2', {
        'w-full': isMobileInPortrait
      })}>
      <PageHeader
        subtitle="Ресторан на озері"
        containerClassName="flex flex-1 bg-santino opacity-85"
        titleClassName="font-extralight text-white text-[60px] tracking-widest"
        subtitleClassName="text-[24px] text-white"
        menu
      />
      <div className={cn('flex flex-1 flex-col w-full gap-4 mt-2', {})}>
        {homePageSectionButtons.map(({ name, path }, index) => (
          <MenuSectionButton
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
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
