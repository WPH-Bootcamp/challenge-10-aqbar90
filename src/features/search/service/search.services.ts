import { api } from '@/lib/api/axios';

import type { SearchResponse } from '../types/search.types';

export async function searchRestaurant(query: string) {
  const response = await api.get<SearchResponse>(`/resto/search?q=${query}`);

  return response.data;
}
