export type OrderStatus =
  | 'preparing'
  | 'on_the_way'
  | 'delivered'
  | 'done'
  | 'cancelled';

export type Order = {
  id: number;

  transactionId: string;

  status: OrderStatus;

  paymentMethod: string;

  deliveryAddress: string;

  phone: string;

  pricing: {
    subtotal: number;
    serviceFee: number;
    deliveryFee: number;
    totalPrice: number;
  };

  restaurants: {
    restaurant: {
      id: number;
      name: string;
      logo: string;
    };

    items: {
      menuId: number;
      menuName: string;
      price: number;
      image: string;
      quantity: number;
      itemTotal: number;
    }[];

    subtotal: number;
  }[];

  createdAt: string;

  updatedAt: string;
};

export type OrdersResponse = {
  success: boolean;

  message: string;

  data: {
    orders: Order[];

    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };

    filter: {
      status: string;
    };
  };
};
