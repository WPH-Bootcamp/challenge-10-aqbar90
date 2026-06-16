import { create } from 'zustand';

interface UpdateProfileModalState {
  isOpen: boolean;

  open: () => void;

  close: () => void;
}

export const useUpdateProfileModal = create<UpdateProfileModalState>((set) => ({
  isOpen: false,

  open: () =>
    set({
      isOpen: true,
    }),

  close: () =>
    set({
      isOpen: false,
    }),
}));
