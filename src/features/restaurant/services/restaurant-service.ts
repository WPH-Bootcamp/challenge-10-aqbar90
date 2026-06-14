import { api } from '@/lib/api/axios';

import type { RecommendedRestaurantResponse } from '../types/restaurant.types';

import type {
  RestaurantFilters,
  RestaurantListResponse,
} from '../types/restaurant.types';

export async function getRecommendedRestaurants() {
  const response =
    await api.get<RecommendedRestaurantResponse>('/resto/recommended');

  return response.data;
}

export async function getRestaurants(
  category: string,
  filters?: RestaurantFilters
) {
  let endpoint = '/resto';

  switch (category) {
    case 'nearby':
      endpoint = '/resto/nearby';
      break;

    case 'best-seller':
      endpoint = '/resto/best-seller';
      break;

    case 'recommended':
      endpoint = '/resto/recommended';
      break;

    default:
      endpoint = '/resto';
      break;
  }

  const response = await api.get<RestaurantListResponse>(endpoint, {
    params: filters,
  });
  return response.data;
}
