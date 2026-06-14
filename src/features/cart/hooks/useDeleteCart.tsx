'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCartItem } from '../services/cart.service';

export function useDeleteCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCartItem,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
}
