'use client';

import { useRestaurants } from '@/features/restaurant/hooks/useRestaurants';

import { RestaurantCard } from '@/features/restaurant/components/RestaurantCard';

export function RestaurantGrid() {
  const { data, isLoading, isError } = useRestaurants('all');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Failed to load restaurants</div>;
  }

  return (
    <section
      className='
        flex-1
      '
    >
      <div
        className='
          grid
          grid-cols-1
          gap-6
          md:grid-cols-2
        '
      >
        {data.data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}
