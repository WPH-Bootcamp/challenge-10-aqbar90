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
          text-lg
          font-extrabold
        '
      >
        Distance
      </h3>

      <div className='space-y-3'>
        {[
          {
            label: 'Nearby',
            value: 1,
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
          <label key={item.label} className='flex items-center gap-3'>
            <input
              type='checkbox'
              checked={filters.range === item.value}
              onChange={() => handleRangeChange(item.value)}
            />

            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
