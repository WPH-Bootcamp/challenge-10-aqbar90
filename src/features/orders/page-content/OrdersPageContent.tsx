'use client';

import { OrdersSidebar } from '../components/OrdersSidebar';

import { OrdersContentCard } from '../components/OrdersContentCard';

import { useOrders } from '../hooks/useOrders';
import { useState } from 'react';

import type { Order } from '../types/order.types';

export function OrdersPageContent() {
  const [activeStatus, setActiveStatus] = useState('done');

  const [search, setSearch] = useState('');

  const { data, isLoading } = useOrders(activeStatus);

  const orders: Order[] = data?.data.orders ?? [];

  const filteredOrders = orders.filter((order) => {
    const keyword = search.toLowerCase();

    const restaurantMatch = order.restaurants.some((restaurant) =>
      restaurant.restaurant.name.toLowerCase().includes(keyword)
    );

    const menuMatch = order.restaurants.some((restaurant) =>
      restaurant.items.some((item) =>
        item.menuName.toLowerCase().includes(keyword)
      )
    );

    return restaurantMatch || menuMatch;
  });

  console.log('MY ORDERS', data);

  console.log(JSON.stringify(data, null, 2));

  return (
    <section
      className='
        mx-auto
        max-w-300
        px-4
        py-8
        md:px-30
        md:py-32
      '
    >
      <div
        className='
          flex
        
        '
      >
        {/* Sidebar */}
        <div
          className='
          text-lg
          leading-lg
          font-bold'
        >
          <OrdersSidebar />
        </div>

        {/* Content */}

        <div className='w-full max-w-232'>
          <h1
            className='
            mb-6
            text-display-xs
            leading-display-xs
            md:text-display-md
            md:leading-display-md
            font-extrabold
          '
          >
            My Orders
          </h1>

          <OrdersContentCard
            orders={filteredOrders}
            activeStatus={activeStatus}
            onStatusChange={setActiveStatus}
            isLoading={isLoading}
            search={search}
            onSearchChange={setSearch}
          />
        </div>
      </div>
    </section>
  );
}
