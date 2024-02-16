import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/'); // Navigate to home page
  };

  return (
    <button
      onClick={handleButtonClick}
      className="fixed bottom-4 right-4 bg-lime-800 text-white w-20 h-20 rounded-full flex items-center justify-center"
    >
      На головну
    </button>
  );
};

export default BackButton;