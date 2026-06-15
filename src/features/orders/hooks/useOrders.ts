'use client';

import { useQuery } from '@tanstack/react-query';

import { getMyOrders } from '../services/orders.service';

export function useOrders(status: string) {
  return useQuery({
    queryKey: ['my-orders', status],

    queryFn: () => getMyOrders(status),
  });
}
