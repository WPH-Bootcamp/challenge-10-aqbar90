'use client';

import { useQuery } from '@tanstack/react-query';

import { searchRestaurant } from '@/features/search/service/search.services';

export function useSearchRestaurant(query: string) {
  return useQuery({
    queryKey: ['restaurant-search', query],

    queryFn: () => searchRestaurant(query),

    enabled: query.length > 1,
  });
}
