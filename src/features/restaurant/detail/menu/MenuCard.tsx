'use client';

import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

import type { RestaurantMenu } from '../types/restaurant-detail.types';

type Props = {
  menu: RestaurantMenu;
  quantity: number;
  onAdd: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function MenuCard({
  menu,
  quantity,
  onAdd,
  onDecrease,
  onIncrease,
}: Props) {
  return (
    <article
      className='
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-card
      '
    >
      <Image
        src={menu.image}
        alt={menu.foodName}
        width={285}
        height={285}
        className='
          aspect-square
          w-full
          object-cover
        '
      />

      <div
        className='
          flex
          flex-col
          items-center
          justify-between
          gap-4
          p-3
          md:p-4
        '
      >
        <div className='space-y-1'>
          <h3
            className='
              text-xs
              leading-xs
              md:text-md
              md:leading-md
              font-medium
            '
          >
            {menu.foodName}
          </h3>

          <p
            className='
              text-md
              leading-md
              md:text-lg
              md:leadding-lg
              font-extrabold
            '
          >
            Rp{menu.price.toLocaleString('id-ID')}
          </p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={onAdd}
            className='
              h-9
              w-full
              rounded-full
              bg-primary
              text-sm
              leading-sm
              font-bold
              text-white
            '
          >
            Add
          </button>
        ) : (
          <div
            className='
              flex
              items-center
              justify-center
              gap-3
              md:gap-4
            '
          >
            <button
              onClick={onDecrease}
              className='
                flex
                size-9
                items-center
                justify-center
                rounded-full
                border
              '
            >
              <Minus size={18} />
            </button>

            <span
              className='
                text-md
                leading-md
                md:leading-lg
                md:text-lg
                font-semibold
              '
            >
              {quantity}
            </span>

            <button
              onClick={onIncrease}
              className='
                flex
                size-9
                items-center
                justify-center
                rounded-full
                bg-primary
                text-white
              '
            >
              <Plus size={18} />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
