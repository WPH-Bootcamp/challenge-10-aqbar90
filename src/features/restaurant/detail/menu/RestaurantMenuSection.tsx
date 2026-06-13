'use client';

import { useMemo, useState } from 'react';

import { MenuCard } from './MenuCard';
import { MenuFilter } from './MenuFilter';

import type { RestaurantMenu } from '../types/restaurant-detail.types';

import { CheckoutBar } from '@/features/restaurant/detail/checkout/CheckoutBar';

import {
  useCartStore,
  useCartTotalItems,
  useCartTotalPrice,
} from '@/features/cart/stores/cart-store';

type Props = {
  menus: RestaurantMenu[];
};

const INITIAL_LIMIT = 8;

const LOAD_MORE_STEP = 4;

export function RestaurantMenuSection({ menus }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const getItemQuantity = useCartStore((state) => state.getItemQuantity);

  const totalItems = useCartTotalItems();

  const totalPrice = useCartTotalPrice();

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

  const items = useCartStore((state) => state.items);

  console.log(items);

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
          grid-cols-1
          gap-5
          md:grid-cols-2
          xl:grid-cols-4
        '
      >
        {visibleMenus.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            quantity={getItemQuantity(menu.id)}
            onAdd={() =>
              addItem({
                id: menu.id,
                foodName: menu.foodName,
                price: menu.price,
                image: menu.image,
              })
            }
            onIncrease={() => increaseQuantity(menu.id)}
            onDecrease={() => decreaseQuantity(menu.id)}
          />
        ))}
        <CheckoutBar totalItems={totalItems} totalPrice={totalPrice} />
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
