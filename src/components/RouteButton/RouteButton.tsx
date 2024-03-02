import { useScreenSize } from '@/utils/hooks/useScreenSize';
import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

type RouteButtonProps = {
  text: string;
  route?: string;
  containerClassName?: string;
  textClassName?: string;
  onClick?: () => void;
};

const RouteButton = ({
  text = 'Бар',
  route,
  containerClassName,
  textClassName,
  onClick
}: RouteButtonProps) => {
  const router = useRouter();
  const { isPortrait, isMobileInPortrait } = useScreenSize();
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = useCallback(() => {
    setIsClicked(true);
    setTimeout(() => !onClick ? router.push(route || '') : onClick(), 200);
  }, [onClick, route, router]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={handleButtonClick}
      className={cn("fixed bottom-4 right-4 bg-beige text-dark-green flex items-center justify-center z-10 opacity-90 overflow-hidden active:bg-slate-500 active:duration-300 shadow-sm shadow-dark-green active:opacity-100 rounded-[20px] px-4 h-24 cursor-pointer transition", {
        'bg-light-green text-beige scale-95': isClicked,
        'w-30': isPortrait,
        'w-20 h-14 rounded-[20px]': isMobileInPortrait
      },
        containerClassName
      )}>
      <div className={cn("flex justify-center text-center text-[28px]", {
        'text-[28px]': isPortrait,
        'text-[18px]': isMobileInPortrait
      },
      textClassName)}>
        {text}
      </div>
    </div>
  );
};

export default RouteButton;
