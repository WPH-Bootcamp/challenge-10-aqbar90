import Image from 'next/image';

import type { CartGroup } from '@/features/cart/types/cart.types';

import { CartItemCard } from '@/features/cart/components/CartItemCard';

type Props = {
  restaurant: CartGroup;
};

export function CheckoutRestaurantCard({ restaurant }: Props) {
  return (
    <div
      className='
        rounded-2xl
        bg-white
        p-5
        shadow-card
      '
    >
      <div
        className='
          flex
          items-center
          justify-between
        '
      >
        <div
          className='
            flex
            items-center
            gap-2
          '
        >
          <Image
            src={restaurant.restaurant.logo}
            alt={restaurant.restaurant.name}
            width={32}
            height={32}
            className='rounded-md'
          />

          <h2
            className='
              text-md
              leading-md
              md:text-lg
              md:leading-lg
              font-bold
              tracking-tight
            '
          >
            {restaurant.restaurant.name}
          </h2>
        </div>

        <button
          className='
            h-9
            md:h-11
            rounded-full
            border
            border-border
            px-6
            text-sm
            font-bold
          '
        >
          Add Item
        </button>
      </div>

      <div className='mt-6 space-y-6'>
        {restaurant.items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
