import { OrdersSearch } from './OrdersSearch';

import { OrderCard } from './OrderCard';

import { OrdersStatusTabs } from './OrdersStatusTabs';

import type { Order } from '@/features/orders/types/order.types';

import { OrderCardSkeleton } from './OrderCardSkeleton';

import { OrdersEmptyState } from './OrdersEmptyState';

type Props = {
  orders: Order[];
  activeStatus: string;
  onStatusChange: (status: string) => void;
  isLoading: boolean;
  search: string;
  onSearchChange: (value: string) => void;
};

export function OrdersContentCard({
  orders,
  activeStatus,
  onStatusChange,
  isLoading,
  search,
  onSearchChange,
}: Props) {
  return (
    <div
      className='
        rounded-2xl
        bg-white
        p-4
        md:p-6
        shadow-card
      '
    >
      <OrdersSearch value={search} onChange={onSearchChange} />

      <OrdersStatusTabs activeStatus={activeStatus} onChange={onStatusChange} />

      <div className='mt-6 space-y-5'>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <OrderCardSkeleton key={index} />
          ))
        ) : orders.length ? (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        ) : (
          <OrdersEmptyState />
        )}
      </div>

      <div
        className='
          rounded-xl
          border
          border-dashed
          border-border
        '
      />
    </div>
  );
}
