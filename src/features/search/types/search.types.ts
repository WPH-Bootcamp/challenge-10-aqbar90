export interface SearchRestaurant {
  id: number;
  name: string;
  place: string;
  logo: string;
  star: number;
}

export interface SearchResponse {
  success: boolean;
  data: {
    restaurants: SearchRestaurant[];
  };
}
