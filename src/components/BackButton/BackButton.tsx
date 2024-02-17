import { cn } from '@/utils/utils';
import { useRouter } from 'next/navigation';

type RouteButtonProps = {
  text: string;
  route: string;
  containerClassName?: string;
  textClassName?: string;
};

const RouteButton = ({
  text = 'Бар',
  route,
  containerClassName,
  textClassName
}: RouteButtonProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    setTimeout(() => router.push(route), 200);
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={handleButtonClick}
      className={cn(
        'fixed bottom-4 right-4 bg-zinc-400 text-white w-20 h-20 rounded-full flex items-center justify-center z-10 overflow-hidden opacity-85 active:bg-slate-500 active:duration-300 shadow-lg shadow-slate-600 active:opacity-100',
        containerClassName
      )}>
      <div
        className={cn(
          'flex justify-center font-serif text-center',
          textClassName
        )}>
        {text}
      </div>
    </div>
  );
};

export default RouteButton;
