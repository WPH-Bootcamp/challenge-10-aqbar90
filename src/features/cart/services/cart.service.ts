import { api } from '@/lib/api/axios';

import type { CartResponse, DeleteCartResponse } from '../types/cart.types';

import type { UpdateCartResponse } from '../types/cart.types';

import type { AddToCartPayload, AddToCartResponse } from '../types/cart.types';

export async function getCart() {
  const response = await api.get<CartResponse>('/cart');

  return response.data;
}

export async function addToCart(payload: AddToCartPayload) {
  const response = await api.post<AddToCartResponse>('/cart', payload);

  return response.data;
}

export async function updateCartItem(
  cartItemId: number,
  quantity: number
): Promise<UpdateCartResponse> {
  const response = await api.put<UpdateCartResponse>(`/cart/${cartItemId}`, {
    quantity,
  });

  return response.data;
}

export async function deleteCartItem(
  cartItemId: number
): Promise<DeleteCartResponse> {
  const response = await api.delete(`/cart/${cartItemId}`);

  return response.data;
}
