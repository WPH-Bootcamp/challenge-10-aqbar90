import { DistanceFilter } from './DistanceFilter';
import { PriceFilter } from './PriceFilter';
import { RatingFilter } from './RatingFilter';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

import { DEFAULT_FILTERS } from '../hooks/useRestaurantFilters';

type Props = {
  filters: RestaurantFilters;
  setFilters: React.Dispatch<React.SetStateAction<RestaurantFilters>>;
};

export function RestaurantFilterSidebar({ filters, setFilters }: Props) {
  const handleClearFilters = () => {
    setFilters(DEFAULT_FILTERS);
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
        <div
          className='
          mb-6
          flex
          items-center
          justify-between
        '
        >
          <h2
            className='
            text-sm
            leading-sm
            font-extrabold
            uppercase
          '
          >
            Filter
          </h2>

          <button
            onClick={handleClearFilters}
            className='
            text-xs
            font-semibold
            text-primary
            hover:underline
          '
          >
            Clear All
          </button>
        </div>

        <DistanceFilter filters={filters} setFilters={setFilters} />

        <hr className='my-6 border-border' />

        <PriceFilter filters={filters} setFilters={setFilters} />

        <hr className='my-6 border-border' />

        <RatingFilter filters={filters} setFilters={setFilters} />
      </div>
    </aside>
  );
}
