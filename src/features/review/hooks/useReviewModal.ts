import { create } from 'zustand';

interface ReviewTarget {
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
}

interface ReviewModalState {
  isOpen: boolean;
  reviewTarget: ReviewTarget | null;

  open: (target: ReviewTarget) => void;

  close: () => void;
}

export const useReviewModal = create<ReviewModalState>((set) => ({
  isOpen: false,

  reviewTarget: null,

  open: (target) =>
    set({
      isOpen: true,
      reviewTarget: target,
    }),

  close: () =>
    set({
      isOpen: false,
      reviewTarget: null,
    }),
}));
