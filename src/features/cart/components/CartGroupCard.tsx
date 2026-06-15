import { ChevronRight } from 'lucide-react';

import type { CartGroup } from '@/features/cart/types/cart.types';

import { CartItemCard } from './CartItemCard';
import Image from 'next/image';
import { CartCheckoutButton } from './CartCheckoutButton';

type Props = {
  restaurant: CartGroup;
};

export function CartGroupCard({ restaurant }: Props) {
  return (
    <div
      className='
        rounded-2xl
        bg-white
        p-4
        shadow-card
      '
    >
      <div
        className='
          flex
          items-center
          gap-1
        '
      >
        <Image
          src={restaurant.restaurant.logo}
          alt={restaurant.restaurant.name}
          width={32}
          height={32}
          className='
          h-8
          w-8
          object-cover
        '
        />

        <span
          className='
            text-md
            leading-md
            md:text-lg
            md:leading-lg
            font-bold
          '
        >
          {restaurant.restaurant.name}
        </span>

        <ChevronRight className='size-5' />
      </div>
      <div className='mt-3 md:mt-6 space-y-3 md:space-y-6'>
        {restaurant.items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>

      <hr
        className='
          my-3
          md:my-6
          border-dashed
          border-border
        '
      />

      <div
        className='
        flex
        flex-col
        gap-3
      '
      >
        <div>
          <p className='text-sm leading-sm font-medium'>Total</p>

          <p
            className='
            text-lg
            leading-lg
            font-extrabold
            tracking-tight
          '
          >
            Rp
            {restaurant.subtotal.toLocaleString('id-ID')}
          </p>
        </div>

        <CartCheckoutButton restaurantId={restaurant.restaurant.id} />
      </div>
    </div>
  );
}
