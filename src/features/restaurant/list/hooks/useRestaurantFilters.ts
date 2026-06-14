'use client';

import { useState } from 'react';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

export function useRestaurantFilters() {
  const [filters, setFilters] = useState<RestaurantFilters>({
    range: undefined,
    priceMin: undefined,
    priceMax: undefined,
    rating: undefined,
    category: undefined,
    page: 1,
    limit: 20,
  });

  return {
    filters,
    setFilters,
  };
}
