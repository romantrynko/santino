'use client';

import BackButton from '@/components/BackButton/BackButton';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

const CategoryPage = () => {


  return (
    <div className="flex relative h-screen w-full flex-col  gap-3 mb-10">
      <BackButton/>
      <div className="flex fixed justify-center w-full p-4 bg-lime-800">
        <div className="font-bold text-[24px] text-white font-serif">
          Закуски
        </div>
      </div>

      <div className="flex flex-col w-full mb-2 mt-20 px-2">
        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            ЗАКУСКА З ОСЕЛЕДЦЕМ ТА КАРТОПЛЕЮ І БУРЯКОМ, ЯЙЦЕМ ТА ЦИБУЛЕЮ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">350</div>
            <div className="font-bold">190</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            ТАР ТАР З ЛОСОСЯ З ЛИМОННОЮ ЗАПРАВКОЮ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">150</div>
            <div className="font-bold">360</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            СКИБКИ СЛАБОСОЛЕНОГО ЛОСОСЯ ІЗ ПРИПРАВЛЕНИМ ВЕРШКОВИМ МАСЛОМ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">100/50</div>
            <div className="font-bold">340</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            САЛО СОЛЕНЕ З ГРІНКАМИ ТА ЧАСНИКОМ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">100/30/50</div>
            <div className="font-bold">160</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            ВІТЕЛО ТОННАТО З КАПЕРСАМИ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">100/100</div>
            <div className="font-bold">240</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            ПАШТЕТ ПЕЧІНКОВИЙ КАРАМЕЛІЗОВАНИЙ В ПОЄДНАННІ З ЯГІДНИМ МУСОМ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">100/50/50</div>
            <div className="font-bold">200</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            ДУЕТ БРУСКЕТ НА БРІОШІ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic" />
            <div className="font-bold">220</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex text-[12px] pr-5 font-semibold">
            РОЛИ З БАКЛАЖАНУ З ГОРІХОВО - СИРНОЮ ЗАПРАВКОЮ
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">150</div>
            <div className="font-bold">240</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex flex-col text-[12px] pr-5 font-semibold">
            СИРНЕ ПЛАТО
            <div className="text-[10px]">
              грісіні, камамбер, пармезан, ементаль та дор блю з медом - чілі
            </div>
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">160/30/30</div>
            <div className="font-bold">290</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex flex-col text-[12px] pr-5 font-semibold">
            СОЛІННЯ ДОМАШНЄ
            <div className="text-[10px]">
              квашені томати та огірки, крижавка та слива
            </div>
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">350</div>
            <div className="font-bold">240</div>
          </div>
        </div>

        <div className="flex w-full justify-between font-sans mb-5">
          <div className="flex flex-col text-[12px] pr-5 font-semibold">
            ОВОЧЕВА ТАРІЛКА
            <div className="text-[10px]">
              спілі томати,огірки та свіжа зелень з цибулею
            </div>
          </div>
          <div className="flex gap-3 font-serif">
            <div className="italic">300</div>
            <div className="font-bold">220</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
