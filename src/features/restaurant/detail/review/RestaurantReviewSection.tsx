'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

import { ReviewCard } from './ReviewCard';

import type { RestaurantReview } from '../types/restaurant-detail.types';

type Props = {
  reviews: RestaurantReview[];
  rating: number;
};

const INITIAL_LIMIT = 6;
const LOAD_MORE_STEP = 4;

export function RestaurantReviewSection({ reviews, rating }: Props) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LIMIT);

  const visibleReviews = reviews.slice(0, visibleCount);

  const hasMore = visibleCount < reviews.length;

  return (
    <section
      className='
        flex
        flex-col
        items-center
        gap-6
      '
    >
      <div className='w-full'>
        <h2
          className='
            text-3xl
            leading-3xl
            mb-3
            md:text-display-lg
            md:leading-display-lg
            font-extrabold
          '
        >
          Review
        </h2>

        <div className='flex items-center gap-1'>
          <Star
            className='
              size-5
              md:size-6
              fill-[#FFAB0D]
              text-[#FFAB0D]
            '
          />

          <span
            className='
              text-lg
              leading-lg
              md:text-xl
              md:leading-xl
              font-extrabold
            '
          >
            {rating} ({reviews.length} Reviews)
          </span>
        </div>
      </div>

      <div
        className='
          grid
          w-full
          grid-cols-1
          gap-5
          lg:grid-cols-2
        '
      >
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
          className='
            rounded-full
            border
            h-10
            w-40
            text-sm
            leading-sm
            font-medium
          '
        >
          Show More
        </button>
      )}
    </section>
  );
}
