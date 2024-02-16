'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Lunch = () => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col p-4 justify-center items-center">
      <div className="flex flex-col h-[95vh] w-full rounded-2xl  bg-blue-300 justify-center items-center">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="text-white text-[16px] cursor-pointer hover:text-green-300 hover:text-[20px] font-bold py-2 px-4 rounded"
          onClick={() => router.push('/')}>
          Main page
        </div>
        <div className="text-[50px] font-serif font-extrabold">Lunch</div>
      </div>
    </div>
  );
};

export default Lunch;
