import { api } from '@/lib/api/axios';

export async function getMyOrders(status: string) {
  const response = await api.get(`/order/my-order?status=${status}`);

  return response.data;
}
