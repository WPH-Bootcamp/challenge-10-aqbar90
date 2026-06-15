import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export function EmptyCart() {
  return (
    <div
      className='
        flex
        flex-col
        items-center
        justify-center
        py-20
        text-center
      '
    >
      <ShoppingBag
        className='
          mb-4
          size-16
          text-muted-foreground
        '
      />

      <h2
        className='
          text-xl
          font-bold
        '
      >
        Your cart is empty
      </h2>

      <p
        className='
          mt-2
          text-muted-foreground
        '
      >
        Add some delicious food to get started.
      </p>

      <Link
        href='/restaurants'
        className='
          mt-6
          rounded-full
          bg-primary
          px-6
          py-3
          font-bold
          text-white
        '
      >
        Browse Restaurants
      </Link>
    </div>
  );
}
