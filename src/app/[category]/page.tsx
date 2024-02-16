'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = useParams();
  const pathname = usePathname();

  const ButtonBack = () => {
    return (
      // biome-ignore lint/a11y/useButtonType: <explanation>
      <button
        className="absolute bottom-5 right-5 bg-gray-500 p-4 rounded-full transition duration-300 ease-in-out cursor-pointer active:bg-gray-900 active:transform active:translate-1 active:duration-300 active:ease-in-out"
        onClick={() => {
          window.history.back();
        }}>
        Back
      </button>
    );
  };


  return (
    <div className="relative flex w-full flex-col p-4 justify-center items-center">
      {pathname !== '/' && <ButtonBack />}
      <div className="flex flex-col h-[95vh] w-full rounded-2xl  bg-red-300 justify-center items-center">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="text-white text-[16px] cursor-pointer hover:text-green-300 hover:text-[20px] font-bold py-2 px-4 rounded"
          onClick={() => router.push('/')}>
          Main page
        </div>
        <div className="text-[50px] font-serif font-extrabold">{category}</div>
      </div>
    </div>
  );
};

export default CategoryPage;