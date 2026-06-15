export type CheckoutPayload = {
  restaurants: {
    restaurantId: number;

    items: {
      menuId: number;
      quantity: number;
    }[];
  }[];

  deliveryAddress: string;
  phone: string;
  paymentMethod: string;
  notes: string;
};

export type CheckoutResponse = {
  success: boolean;
  message: string;

  data: {
    transaction: {
      id: number;
      transactionId: string;

      paymentMethod: string;
      status: string;

      itemCount: number;

      deliveryAddress: string;
      phone: string;

      pricing: {
        subtotal: number;
        serviceFee: number;
        deliveryFee: number;
        totalPrice: number;
      };
      createdAt: string;
    };
  };
};
