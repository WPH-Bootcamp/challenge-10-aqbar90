import { api } from '@/lib/api/axios';

import type { RestaurantDetailResponse } from '../types/restaurant-detail.types';

export async function getRestaurantDetail(id: string) {
  const response = await api.get<RestaurantDetailResponse>(`/resto/${id}`);

  return response.data;
}
