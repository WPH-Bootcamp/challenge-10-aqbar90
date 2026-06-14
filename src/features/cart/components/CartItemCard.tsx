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
    if (item.quantity === 1) {
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
        gap-6
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

        <div>
          <h3
            className='
              text-base
              font-medium
            '
          >
            {item.menu.foodName}
          </h3>

          <p
            className='
              mt-1
              text-lg
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
