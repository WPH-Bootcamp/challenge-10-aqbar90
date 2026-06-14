export type Restaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;

  priceRange: {
    min: number;
    max: number;
  };

  distance?: number;
};

export type RestaurantListResponse = {
  success: boolean;
  data: {
    restaurants: Restaurant[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
};

export type RecommendedRestaurant = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  sampleMenus: {
    id: number;
    foodName: string;
    price: number;
    type: string;
    image: string;
  }[];

  isFrequentlyOrdered: boolean;

  distance: number;
};

export type RecommendedRestaurantResponse = {
  success: boolean;

  data: {
    recommendations: RecommendedRestaurant[];
  };
};

export type RestaurantFilters = {
  location?: string;
  range?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  category?: string;
  page?: number;
  limit?: number;
};
