export type CartMenu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

export type CartItem = {
  id: number;
  menu: CartMenu;
  quantity: number;
  itemTotal: number;
};

export type CartRestaurant = {
  id: number;
  name: string;
  logo: string;
};

export type CartGroup = {
  restaurant: CartRestaurant;
  items: CartItem[];
  subtotal: number;
};

export type CartSummary = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};

export type CartResponse = {
  success: boolean;

  data: {
    cart: CartGroup[];
    summary: CartSummary;
  };
};

export type UpdateCartResponse = {
  success: boolean;

  data: {
    cartItem: {
      id: number;

      restaurant: {
        id: number;
        name: string;
        logo: string;
      };

      menu: {
        id: number;
        foodName: string;
        price: number;
        type: string;
        image: string;
      };

      quantity: number;

      itemTotal: number;
    };
  };
};

export type AddToCartPayload = {
  restaurantId: number;
  menuId: number;
  quantity: number;
};

export type AddToCartResponse = {
  success: boolean;
  message: string;

  data: {
    cartItem: {
      id: number;

      restaurant: {
        id: number;
        name: string;
        logo: string;
      };

      menu: {
        id: number;
        foodName: string;
        price: number;
        type: string;
        image: string;
      };

      quantity: number;
      itemTotal: number;
    };
  };
};

export type DeleteCartResponse = {
  success: boolean;
  message: string;
};
