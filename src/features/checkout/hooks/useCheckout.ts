'use client';

import { useMutation } from '@tanstack/react-query';

import { checkout } from '../services/checkout.service';

export function useCheckout() {
  return useMutation({
    mutationFn: checkout,
  });
}
