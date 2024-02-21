import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

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

  const handleButtonClick = useCallback(() => {
    !onClick ? router.push(route || '') : onClick();
  }, [onClick, route, router]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={handleButtonClick}
      className={cn("fixed bottom-4 right-4 bg-beige text-dark-green w-20 h-14 rounded-[14px] flex items-center justify-center z-10 overflow-hidden active:bg-slate-500 active:duration-300 shadow-inner shadow-dark-green active:opacity-100 text-[16px]",
        containerClassName
      )}>
      <div className={cn("flex justify-center text-center text-[18px]", textClassName)}>
        {text}
      </div>
    </div>
  );
};

export default RouteButton;
