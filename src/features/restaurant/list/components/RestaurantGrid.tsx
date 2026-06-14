'use client';

import { useRestaurants } from '@/features/restaurant/hooks/useRestaurants';

import { RestaurantCard } from '@/features/restaurant/components/RestaurantCard';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

import { RestaurantCardSkeleton } from '@/features/restaurant/list/components/RestorantCardSkeleton';

type Props = {
  category: string;
  filters: RestaurantFilters;
};

export function RestaurantGrid({ category, filters }: Props) {
  const { data, isLoading, isError } = useRestaurants(category, filters);

  if (isLoading) {
    return (
      <section className='flex-1'>
        <div
          className='
          grid
          gap-5
          md:grid-cols-2
        '
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <RestaurantCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return <div>Failed to load restaurants</div>;
  }

  const restaurants = data.data.restaurants;

  if (data?.data?.restaurants.length === 0) {
    return (
      <section
        className='
        flex
        flex-1
        flex-col
        items-center
        justify-center
        py-20
        text-center
      '
      >
        <h3
          className='
          mb-2
          text-md
          leading-md
          md:text-xl
          md:leading-xl
          font-bold
        '
        >
          No restaurants found
        </h3>

        <p
          className='
          text-muted-foreground
        '
        >
          Try adjusting your filters or clear all filters.
        </p>
      </section>
    );
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
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}
