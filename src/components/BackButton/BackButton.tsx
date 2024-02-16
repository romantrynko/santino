import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    setTimeout(() => router.push('/'), 300);
  };

  return (
    <div
      onClick={handleButtonClick}
      className="fixed bottom-4 right-4 bg-lime-800 text-white w-20 h-20 rounded-full flex pt-2 justify-center z-10 overflow-hidden border opacity-80 active:bg-lime-400 active:duration-300">
      <div className="flex justify-center font-serif text-center">
        На головну
      </div>
    </div>
  );
};

export default BackButton;
