'use client';

import { useCart } from '../hooks/useCart';
import { CartGroupCard } from './CartGroupCard';

export function CartPageContent() {
  const { data, isLoading, isError } = useCart();

  console.log('CART DATA', data);

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  if (isError || !data) {
    return <div>Failed to load cart</div>;
  }

  return (
    <section
      className='
        mx-auto
        max-w-200
        py-8
        lg:py-12
      '
    >
      <h1
        className='
          mb-8
          text-display-md
          font-extrabold
        '
      >
        My Cart
      </h1>

      <p>Total Cart Groups: {data?.data?.cart?.length}</p>

      <div className='space-y-5'>
        {data.data.cart.map((group) => (
          <CartGroupCard key={group.restaurant.id} restaurant={group} />
        ))}
      </div>
    </section>
  );
}
