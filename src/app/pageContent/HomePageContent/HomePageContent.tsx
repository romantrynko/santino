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
      router.push(path);
    },
    [router]
  );

  return (
    <div
      className={cn('flex flex-col h-[86vh] w-full', {
        'w-full': isMobileInPortrait
      })}>
      <PageHeader containerClassName="flex bg-logo-small-green" />
      <div className={cn('flex z-10 flex-1 flex-col w-full gap-4 mt-2 bg-white bg-cover bg-center', {})}>
        {homePageSectionButtons.map(({ name, path }, index) => (
          <MenuSectionButton
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            delay={index * 300}
            containerClassName={'flex-1 text-dark-green p-5 bg-bg-splat bg-cover rounded-lg'}
            innerContainerClassName='border border-dark-green rounded bg-beige opacity-90'
            textClassName="text-[34px]"
            onClick={() => handleButtonClick(path)}>
            {name}
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
