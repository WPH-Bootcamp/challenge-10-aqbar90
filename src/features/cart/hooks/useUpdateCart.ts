'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateCartItem } from '../services/cart.service';

import type { CartResponse } from '../types/cart.types';

export function useUpdateCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      cartItemId,
      quantity,
    }: {
      cartItemId: number;
      quantity: number;
    }) => updateCartItem(cartItemId, quantity),

    onMutate: async ({ cartItemId, quantity }) => {
      await queryClient.cancelQueries({
        queryKey: ['cart'],
      });

      const previousCart = queryClient.getQueryData<CartResponse>(['cart']);

      queryClient.setQueryData<CartResponse>(['cart'], (oldData) => {
        if (!oldData) {
          return oldData;
        }

        return {
          ...oldData,

          data: {
            ...oldData.data,

            cart: oldData.data.cart.map((group) => ({
              ...group,

              items: group.items.map((item) => {
                if (item.id !== cartItemId) {
                  return item;
                }

                return {
                  ...item,
                  quantity,
                  itemTotal: quantity * item.menu.price,
                };
              }),

              subtotal: group.items.reduce((total, item) => {
                if (item.id === cartItemId) {
                  return total + quantity * item.menu.price;
                }

                return total + item.itemTotal;
              }, 0),
            })),
          },
        };
      });

      return {
        previousCart,
      };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
}
