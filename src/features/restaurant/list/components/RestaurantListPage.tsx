import { PageContainer } from '@/components/layout/PageContainer';

import { RestaurantFilterSidebar } from '@/features/restaurant/list/components/RestaurantFilterSidebar';
import { RestaurantGrid } from '@/features/restaurant/list/components/RestaurantGrid';

export function RestaurantListPage() {
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
            text-display-md
            font-extrabold
          '
        >
          All Restaurant
        </h1>

        <div
          className='
            flex
            flex-col
            gap-8
            md:flex-row
            md:gap-10
          '
        >
          <RestaurantFilterSidebar />

          <RestaurantGrid />
        </div>
      </section>
    </PageContainer>
  );
}
