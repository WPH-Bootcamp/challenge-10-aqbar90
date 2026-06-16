'use client';

import { useEffect, useState } from 'react';

import { useRestaurants } from '../hooks/useRestaurants';
import { useCategoryStore } from '../stores/category-store';
import { RestaurantGrid } from './RestaurantGrid';

const INITIAL_LIMIT = 12;
const LOAD_MORE_STEP = 6;

export function RestaurantSection() {
  const selectedCategory = useCategoryStore((state) => state.selectedCategory);

  const { data, isLoading, isError } = useRestaurants(selectedCategory);

  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(INITIAL_LIMIT);
  }, [selectedCategory]);

  console.log('API RESPONSE', data);
  console.log('TOTAL RESTAURANTS', data?.data?.restaurants?.length);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Failed to load restaurants</p>;
  }

  const restaurants = data.data.restaurants.slice(0, visibleCount);

  const hasMore = visibleCount < data.data.restaurants.length;

  const titleMap = {
    all: 'All Restaurants',
    nearby: 'Nearby Restaurants',
    'best-seller': 'Best Seller Restaurants',
    delivery: 'Delivery',
    lunch: 'Lunch',
  };

  return (
    <section>
      <div>
        <div
          className='
            mb-5
            flex
            items-center
            justify-between
          '
        >
          <h2
            className='
              text-2xl
              leading-2xl
              font-extrabold
              md:text-display-md
              md:leading-display-md
            '
          >
            {titleMap[selectedCategory as keyof typeof titleMap]}
          </h2>
        </div>

        <RestaurantGrid restaurants={restaurants} />

        {hasMore && (
          <div className='mt-8 flex justify-center'>
            <button
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
              className='
                rounded-full
                border
                px-8
                py-2
                font-bold
              '
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
