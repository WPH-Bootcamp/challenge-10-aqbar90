import Image from 'next/image';

import type { CartItem } from '../types/cart.types';

import { QuantityControl } from './QuantityControl';

import { useUpdateCart } from '../hooks/useUpdateCart';

import { useDeleteCart } from '../hooks/useDeleteCart';

type Props = {
  item: CartItem;
};

export function CartItemCard({ item }: Props) {
  const { mutate } = useUpdateCart();

  const { mutate: removeItem } = useDeleteCart();

  const handleIncrease = () => {
    mutate({
      cartItemId: item.id,
      quantity: item.quantity + 1,
    });
  };

  const handleDecrease = () => {
    console.log('CLICK MINUS', item.id, item.quantity);

    if (item.quantity === 1) {
      console.log('DELETE TRIGGERED');

      removeItem(item.id);

      return;
    }

    mutate({
      cartItemId: item.id,
      quantity: item.quantity - 1,
    });
  };

  return (
    <div
      className='
        flex
        items-center
        justify-between
        gap-4
      '
    >
      <div
        className='
          min-w-0
          flex
          items-center
          gap-4
        '
      >
        <Image
          src={item.menu.image}
          alt={item.menu.foodName}
          width={64}
          height={64}
          className='
            h-16
            w-16
            rounded-xl
            object-cover
          '
        />

        <div
          className='
          flex
          flex-col
        '
        >
          <h3
            className='
              text-sm
              leading-sm
              font-medium
            '
          >
            {item.menu.foodName}
          </h3>

          <p
            className='
              text-md
              leading-md
              font-extrabold
            '
          >
            Rp
            {item.menu.price.toLocaleString('id-ID')}
          </p>
        </div>
      </div>

      <QuantityControl
        quantity={item.quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}
