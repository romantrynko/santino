import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const buttons = [
  { value: 1, name: 'Кухня', path: '/kitchen', padding: 'p-10' },
  { value: 2, name: 'Бар', path: '/bar', padding: 'p-10' },
];

const HomePageContent = () => {
  const { isMobileInPortrait } = useScreenSize();

  const router = useRouter();

  const handleButtonClick = useMemo(() => (path: string) => {
    setTimeout(() => {
      router.push(path);
    }, 300);
    
  }, [router]);

  return (
    <div
      className={cn('flex flex-col w-full h-full p-2', {
        'w-full': isMobileInPortrait
      })}>
      <PageHeader
        containerClassName="h-40 bg-santino-header"
        textClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      <div className={cn('flex flex-col w-full h-full gap-2 mt-2', {})}>
        {buttons.map(({ name, path, padding }) => (
          <MenuSectionButton
            key={path}
            containerClassName={cn("", padding)}
            textClassName="text-[24px] font-serif font-light text-amber-100 "
            onClick={() => handleButtonClick(path)}
            >
            {name}
           
          </MenuSectionButton>
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
