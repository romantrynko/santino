import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { homePageSectionButtons } from '@/constants/menuList';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const HomePageContent = () => {
  const { isMobile, isPortrait } = useScreenSize();

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
        'w-full': isMobile
      })}>
      <PageHeader
        containerClassName={cn('flex bg-main-logo-2', {
          'bg-main-logo-2': isPortrait,
          'bg-logo-small-green': isMobile
        })}
      />
      <div
        className={cn(
          'flex z-10 items-center flex-1 flex-col w-full mt-2 bg-white bg-cover bg-center gap-4',
          {
            'gap-[120px]': isPortrait,
            'gap-4': isMobile,
          }
        )}>
        {homePageSectionButtons.map(({ name, path }, index) => (
          <MenuSectionButton
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            delay={index * 300}
            containerClassName={cn(
              'flex-1 text-dark-green p-5 bg-bg-splat bg-contain rounded-lg w-3/6',
              { "w-[80%]": isPortrait, 'w-full': isMobile }
            )}
            innerContainerClassName="border border-dark-green rounded bg-beige opacity-90"
            textClassName={cn({
              'text-[70px]': isPortrait,
              'text-[34px]': isMobile
            })}
            onClick={() => handleButtonClick(path)}>
            {name}
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
