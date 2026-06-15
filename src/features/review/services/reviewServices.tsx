import { api } from '@/lib/api/axios';

import type {
  CreateReviewPayload,
  CreateReviewResponse,
} from '@/features/review/types/reviewType';

export async function createReview(payload: CreateReviewPayload) {
  const response = await api.post<CreateReviewResponse>('/review', payload);

  return response.data;
}
