export interface CreateReviewPayload {
  transactionId: string;
  restaurantId: number;
  star: number;
  comment: string;
  menuIds: number[];
}

export interface CreateReviewResponse {
  success: boolean;
  message: string;

  data: {
    id: number;
    star: number;
    comment: string;
    transactionId: string;
  };
}
