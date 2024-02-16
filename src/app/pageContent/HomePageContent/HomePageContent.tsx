import MenuSectionButton from '@/components/MenuSectionButton';
import PageHeader from '@/components/PageHeader';
import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';

const buttons = [
  { value: 1, name: 'Breakfast', path: '/menu/breakfast' },
  { value: 2, name: 'Lunch', path: '/menu/lunch' },
  { value: 3, name: 'Dinner', path: '/menu/dinner' },
  { value: 4, name: 'Dessert', path: '/menu/dessert' },
  { value: 5, name: 'Drinks', path: '/menu/drinks' },
  { value: 6, name: 'Specials', path: 'menu/specials' },
  { value: 7, name: 'Contact', path: '/menu/contact' }
];

const HomePageContent = () => {
  const { isMobileInPortrait } = useScreenSize();


  const router = useRouter();

  const handleButtonClick = useMemo(() => (route: string) => {
    setTimeout(() => {
      router.push(route);
    }, 300);
    
  }, [router]);


  return (
    <div
      className={cn('flex flex-col w-full h-full p-2', {
        'w-full': isMobileInPortrait
      })}>
      <PageHeader
        title={'SANTINO'}
        containerClassName="h-40 bg-santino opacity-70"
        textClassName="font-extralight text-white text-[70px] tracking-widest"
      />
      <div className={cn('flex flex-col w-full h-full gap-2 mt-2', {})}>
        {buttons.map(({ name, path }) => (
          <MenuSectionButton
            key={name}
            containerClassName="bg-gray-500 p-4 rounded-full transition duration-300 ease-in-out cursor-pointer active:bg-gray-900 active:transform active:translate-1 active:duration-300 active:ease-in-out"
            textClassName="text-[20px] font-serif font-bold "
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
