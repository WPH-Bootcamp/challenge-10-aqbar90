import { ChevronRight } from 'lucide-react';

import type { CartGroup } from '@/features/cart/types/cart.types';

import { CartItemCard } from './CartItemCard';

type Props = {
  restaurant: CartGroup;
};

export function CartGroupCard({ restaurant }: Props) {
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
          gap-2
        '
      >
        <div
          className='
            h-8
            w-8
            rounded-md
            bg-muted
          '
        />

        <span
          className='
            text-lg
            font-bold
          '
        >
          {restaurant.restaurant.name}
        </span>

        <ChevronRight className='size-5' />
      </div>
      <div className='mt-6 space-y-6'>
        {restaurant.items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>

      <hr
        className='
          my-6
          border-dashed
          border-border
        '
      />

      <div
        className='
        flex
        items-center
        justify-between
      '
      >
        <div>
          <p className='text-sm'>Total</p>

          <p
            className='
            text-2xl
            font-extrabold
          '
          >
            Rp
            {restaurant.subtotal.toLocaleString('id-ID')}
          </p>
        </div>

        <div>Checkout Placeholder</div>
      </div>
    </div>
  );
}
