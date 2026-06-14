'use client';

import { PageContainer } from '@/components/layout/PageContainer';

import { RestaurantFilterSidebar } from '@/features/restaurant/list/components/RestaurantFilterSidebar';
import { RestaurantGrid } from '@/features/restaurant/list/components/RestaurantGrid';
import { useRestaurantFilters } from '../hooks/useRestaurantFilters';

import { MobileFilterSheet } from '@/features/restaurant/list/components/MobileFilterSheet';

export function RestaurantListPage() {
  const { filters, setFilters } = useRestaurantFilters();

  return (
    <PageContainer>
      <section
        className='
          py-8
          lg:py-12
        '
      >
        <h1
          className='
            mb-8
            text-display-xs
            leading-display-xs
            md:text-display-md
            md:leading-display-md
            font-extrabold
          '
        >
          All Restaurant
        </h1>

        <MobileFilterSheet filters={filters} setFilters={setFilters} />

        <div
          className='
            flex
            flex-col
            gap-8
            md:flex-row
            md:gap-10
          '
        >
          <RestaurantFilterSidebar filters={filters} setFilters={setFilters} />

          <RestaurantGrid category='all' filters={filters} />
        </div>
      </section>
    </PageContainer>
  );
}
