import { Input } from '@/components/ui/input';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

type Props = {
  filters: RestaurantFilters;
  setFilters: React.Dispatch<React.SetStateAction<RestaurantFilters>>;
};

export function PriceFilter({ filters, setFilters }: Props) {
  return (
    <section className='space-y-4'>
      <h3
        className='
          text-lg
          font-extrabold
        '
      >
        Price
      </h3>

      <div className='space-y-3'>
        <Input
          type='number'
          placeholder='Minimum Price'
          value={filters.priceMin ?? ''}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceMin: e.target.value ? Number(e.target.value) : undefined,
              page: 1,
            }))
          }
        />

        <Input
          type='number'
          placeholder='Maximum Price'
          value={filters.priceMax ?? ''}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              priceMax: e.target.value ? Number(e.target.value) : undefined,
              page: 1,
            }))
          }
        />
      </div>
    </section>
  );
}
