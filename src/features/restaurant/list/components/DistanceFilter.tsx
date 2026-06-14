import { Checkbox } from '@/components/ui/checkbox';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

type Props = {
  filters: RestaurantFilters;
  setFilters: React.Dispatch<React.SetStateAction<RestaurantFilters>>;
};

export function DistanceFilter({ filters, setFilters }: Props) {
  const handleRangeChange = (range: number) => {
    setFilters((prev) => ({
      ...prev,
      range: prev.range === range ? undefined : range,
      page: 1,
    }));
  };
  return (
    <section className='space-y-4'>
      <h3
        className='
          text-sm
          ledaing-sm
          md:text-lg
          md:leading-lg
          font-normal
        '
      >
        Distance
      </h3>

      <div className='space-y-3'>
        {[
          {
            label: 'Nearby',
            value: 0,
          },
          {
            label: 'Within 1 km',
            value: 1,
          },
          {
            label: 'Within 3 km',
            value: 3,
          },
          {
            label: 'Within 5 km',
            value: 5,
          },
        ].map((item) => (
          <label key={item.value} className='flex items-center gap-3'>
            <Checkbox
              checked={filters.range === item.value}
              onCheckedChange={() => handleRangeChange(item.value)}
              className='
              data-[state=checked]:border-primary
              data-[state=checked]:bg-primary
            '
            />

            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
