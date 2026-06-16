'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCartItem } from '../services/cart.service';

export function useDeleteCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,

    onSuccess: (data) => {
      console.log('DELETE SUCCESS', data);

      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
    onError: (error) => {
      console.log('DELETE ERROR', error);
    },
  });
}
