import { api } from '@/lib/api/axios';

import type {
  CheckoutPayload,
  CheckoutResponse,
} from '../types/checkout.types';

export async function checkout(payload: CheckoutPayload) {
  const response = await api.post<CheckoutResponse>('/order/checkout', payload);

  return response.data;
}
