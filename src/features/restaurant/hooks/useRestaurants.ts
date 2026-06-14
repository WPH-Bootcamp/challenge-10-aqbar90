import { useQuery } from '@tanstack/react-query';

import { getRestaurants } from '../services/restaurant-service';
import type { RestaurantFilters } from '../types/restaurant.types';

export function useRestaurants(category: string, filters?: RestaurantFilters) {
  return useQuery({
    queryKey: ['restaurants', category, filters],

    queryFn: () => getRestaurants(category, filters),
  });
}
