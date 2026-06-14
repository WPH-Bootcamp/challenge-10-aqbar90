'use client';

import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

import { addToCart } from '../services/cart.service';

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,

    onSuccess: (data) => {
      console.log('ADD CART SUCCESS', data);

      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },

    onError: (error) => {
      console.log('ADD CART ERROR', error);
    },
  });
}
