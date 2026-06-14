'use client';

import { useMemo, useState } from 'react';

import { MenuCard } from './MenuCard';
import { MenuFilter } from './MenuFilter';

import type { RestaurantMenu } from '../types/restaurant-detail.types';

import { CheckoutBar } from '@/features/restaurant/detail/checkout/CheckoutBar';

import { useAddToCart } from '@/features/cart/hooks/useAddToCart';

import { useCart } from '@/features/cart/hooks/useCart';

import { useUpdateCart } from '@/features/cart/hooks/useUpdateCart';

type Props = {
  restaurantId: number;
  menus: RestaurantMenu[];
};

const INITIAL_LIMIT = 8;

const LOAD_MORE_STEP = 4;

export function RestaurantMenuSection({ menus, restaurantId }: Props) {
  const { mutate: updateCart } = useUpdateCart();

  const { data: cartData } = useCart();

  const { mutate: addToCart } = useAddToCart();

  const [selected, setSelected] = useState<'all' | 'food' | 'drink'>('all');

  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);

  const filteredMenus = useMemo(() => {
    if (selected === 'all') {
      return menus;
    }

    return menus.filter((menu) => menu.type.toLowerCase() === selected);
  }, [menus, selected]);

  const visibleMenus = filteredMenus.slice(0, visibleCount);

  const hasMore = visibleCount < filteredMenus.length;

  const getBackendCartItem = (menuId: number) => {
    return cartData?.data.cart
      .flatMap((group) => group.items)
      .find((item) => item.menu.id === menuId);
  };

  return (
    <section
      className='
        flex
        flex-col
        items-center
        gap-8
        pb-32
      '
    >
      <div className='w-full space-y-6'>
        <h2
          className='
            text-display-lg
            font-extrabold
          '
        >
          Menu
        </h2>

        <MenuFilter selected={selected} onChange={setSelected} />
      </div>

      <div
        className='
          grid
          grid-cols-2
          gap-5
          md:grid-cols-4
        '
      >
        {visibleMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            quantity={getBackendCartItem(menu.id)?.quantity ?? 0}
            onAdd={() => {
              addToCart({
                restaurantId,
                menuId: menu.id,
                quantity: 1,
              });
            }}
            onIncrease={() => {
              const cartItem = getBackendCartItem(menu.id);

              if (!cartItem) {
                return;
              }

              updateCart({
                cartItemId: cartItem.id,
                quantity: cartItem.quantity + 1,
              });
            }}
            onDecrease={() => {
              const cartItem = getBackendCartItem(menu.id);

              if (!cartItem) {
                return;
              }

              if (cartItem.quantity <= 1) {
                return;
              }

              updateCart({
                cartItemId: cartItem.id,
                quantity: cartItem.quantity - 1,
              });
            }}
          />
        ))}
        <CheckoutBar
          totalItems={cartData?.data.summary.totalItems ?? 0}
          totalPrice={cartData?.data.summary.totalPrice ?? 0}
        />
      </div>

      {hasMore && (
        <button
          onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
          className='
            rounded-full
            border
            px-8
            py-3
            font-bold
          '
        >
          Show More
        </button>
      )}
    </section>
  );
}
