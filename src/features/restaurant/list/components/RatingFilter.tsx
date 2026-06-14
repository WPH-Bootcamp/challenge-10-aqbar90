import { Star } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

type Props = {
  filters: RestaurantFilters;
  onRatingChange: (rating: number) => void;
};

export function RatingFilter({ filters, onRatingChange }: Props) {
  return (
    <section className='space-y-4'>
      <h3
        className='
          text-lg
          font-extrabold
        '
      >
        Rating
      </h3>

      <div className='space-y-3'>
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating} className='flex items-center gap-3'>
            <Checkbox
              checked={filters.rating === rating}
              onCheckedChange={() => onRatingChange(rating)}
              className='
              data-[state=checked]:border-primary
              data-[state=checked]:bg-primary
            '
            />

            <div className='flex items-center gap-1'>
              <Star
                className='
                  size-4
                  fill-[#FFAB0D]
                  text-[#FFAB0D]
                '
              />

              <span>{rating}</span>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
