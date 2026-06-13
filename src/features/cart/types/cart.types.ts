export type CartItem = {
  id: number;
  foodName: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartStore = {
  items: CartItem[];

  addItem: (item: Omit<CartItem, 'quantity'>) => void;

  increaseQuantity: (itemId: number) => void;

  decreaseQuantity: (itemId: number) => void;

  removeItem: (itemId: number) => void;

  clearCart: () => void;

  getItemQuantity: (itemId: number) => number;
};
