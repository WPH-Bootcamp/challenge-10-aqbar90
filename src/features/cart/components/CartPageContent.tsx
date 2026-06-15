'use client';

import { useCart } from '../hooks/useCart';
import { CartGroupCard } from './CartGroupCard';

import { EmptyCart } from './EmptyCart';

export function CartPageContent() {
  const { data, isLoading, isError } = useCart();

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  if (isError || !data) {
    return <div>Failed to load cart</div>;
  }

  if (data.data.cart.length === 0) {
    return (
      <section
        className='
        mx-auto
        w-full
        max-w-320
        px-4
        pt-20
        pb-10
        md:px-30
      '
      >
        <h1
          className='
          mb-4
          text-display-xs
          font-extrabold
          md:text-display-md
        '
        >
          My Cart
        </h1>

        <EmptyCart />
      </section>
    );
  }

  return (
    <section
      className='
      mx-auto
      w-full
      max-w-320
      px-4
      pt-20
      pb-10
      md:px-30
    '
    >
      <h1
        className='
          mb-4
          md:mb-8
          text-display-xs
          leading-display-xs
          md:text-display-md
          md:leading-display-md
          font-extrabold
        '
      >
        My Cart
      </h1>

      <div className='space-y-5'>
        {data.data.cart.map((group) => (
          <CartGroupCard key={group.restaurant.id} restaurant={group} />
        ))}
      </div>
    </section>
  );
}
