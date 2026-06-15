'use client';

import { create } from 'zustand';

type CheckoutData = {
  transactionId: string;
  paymentMethod: string;
  subtotal: number;
  itemCount: number;
  deliveryFee: number;
  serviceFee: number;
  totalPrice: number;
  createdAt: string;
};

type CheckoutStore = {
  checkoutData: CheckoutData | null;

  setCheckoutData: (data: CheckoutData) => void;

  clearCheckoutData: () => void;
};

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  checkoutData: null,

  setCheckoutData: (data) =>
    set({
      checkoutData: data,
    }),

  clearCheckoutData: () =>
    set({
      checkoutData: null,
    }),
}));
