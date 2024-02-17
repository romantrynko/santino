import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    setTimeout(() => router.push('/'), 200);
  };

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={handleButtonClick}
      className="fixed bottom-4 right-4 bg-zinc-400 text-white w-20 h-20 rounded-full flex pt-2 justify-center z-10 overflow-hidden opacity-85 active:bg-slate-500 active:duration-300 shadow-lg shadow-slate-600 active:opacity-100">
      <div className="flex justify-center font-serif text-center">
        На головну
      </div>
    </div>
  );
};

export default BackButton;
