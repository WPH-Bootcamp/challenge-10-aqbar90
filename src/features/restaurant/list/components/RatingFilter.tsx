import { Star } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

type Props = {
  filters: RestaurantFilters;
  setFilters: React.Dispatch<React.SetStateAction<RestaurantFilters>>;
};

export function RatingFilter({ filters, setFilters }: Props) {
  const handleRatingChange = (rating: number) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? undefined : rating,
      page: 1,
    }));
  };

  return (
    <section className='space-y-4'>
      <h3
        className='
          text-sm
          leading-sm
          md:text-lg
          md:leading-lg
          font-medium
        '
      >
        Rating
      </h3>

      <div className='space-y-3'>
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating} className='flex items-center gap-3'>
            <Checkbox
              checked={filters.rating === rating}
              onCheckedChange={() => handleRatingChange(rating)}
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
