export type RestaurantMenu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};

export type RestaurantReview = {
  id: number;
  star: number;
  comment: string;
  createdAt: string;

  user: {
    id: number;
    name: string;
    avatar: string;
  };
};

export type RestaurantDetail = {
  id: number;
  name: string;

  star: number;
  averageRating: number;

  place: string;

  coordinates: {
    lat: number;
    long: number;
  };

  distance: number;

  logo: string;
  images: string[];

  category: string;

  totalMenus: number;
  totalReviews: number;

  menus: RestaurantMenu[];

  reviews: RestaurantReview[];
};

export type RestaurantDetailResponse = {
  success: boolean;

  data: RestaurantDetail;
};
