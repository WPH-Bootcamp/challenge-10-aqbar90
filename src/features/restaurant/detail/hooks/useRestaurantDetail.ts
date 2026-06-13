import { useQuery } from '@tanstack/react-query';

import { getRestaurantDetail } from '../services/restaurant-detail.service';

export function useRestaurantDetail(id: string) {
  return useQuery({
    queryKey: ['restaurant-detail', id],
    queryFn: () => getRestaurantDetail(id),
    enabled: !!id,
  });
}
