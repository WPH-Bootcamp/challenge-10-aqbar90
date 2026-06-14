import { DistanceFilter } from './DistanceFilter';
import { PriceFilter } from './PriceFilter';
import { RatingFilter } from './RatingFilter';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

type Props = {
  filters: RestaurantFilters;
  setFilters: React.Dispatch<React.SetStateAction<RestaurantFilters>>;
};

export function RestaurantFilterSidebar({ filters, setFilters }: Props) {
  const handleRatingChange = (rating: number) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? undefined : rating,
      page: 1,
    }));
  };

  return (
    <aside
      className='
        hidden
        md:block
        w-66.5
        shrink-0
        rounded-2xl
        bg-white
        shadow-card
      '
    >
      <div className='p-6'>
        <h2
          className='
            mb-6
            text-sm
            font-extrabold
            uppercase
          '
        >
          Filter
        </h2>

        <DistanceFilter filters={filters} setFilters={setFilters} />

        <hr className='my-6 border-border' />

        <PriceFilter filters={filters} setFilters={setFilters} />

        <hr className='my-6 border-border' />

        <RatingFilter filters={filters} onRatingChange={handleRatingChange} />
      </div>
    </aside>
  );
}
