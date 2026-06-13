'use client';

import { useState } from 'react';

import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';

import type { RestaurantMenu } from '../types/restaurant-detail.types';

type Props = {
  menu: RestaurantMenu;
};

export function MenuCard({ menu }: Props) {
  const [quantity, setQuantity] = useState(0);

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
          h-71.25
          w-full
          object-cover
        '
      />

      <div
        className='
          flex
          items-center
          justify-between
          p-4
        '
      >
        <div>
          <h3
            className='
              text-md
              font-medium
            '
          >
            {menu.foodName}
          </h3>

          <p
            className='
              text-lg
              font-extrabold
            '
          >
            Rp{menu.price.toLocaleString('id-ID')}
          </p>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => setQuantity(1)}
            className='
              rounded-full
              bg-primary
              px-5
              py-2
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
              gap-4
            '
          >
            <button
              onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
              className='
                flex
                size-10
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
                text-lg
                font-semibold
              '
            >
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className='
                flex
                size-10
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
