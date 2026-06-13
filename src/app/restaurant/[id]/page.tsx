'use client';

import { use } from 'react';

import { PageContainer } from '@/components/layout/PageContainer';

import { RestaurantGallery } from '@/features/restaurant/detail/gallery/RestaurantGalery';
import { RestaurantHeader } from '@/features/restaurant/detail/header/RestaurantDetailHeader';

import { useRestaurantDetail } from '@/features/restaurant/detail/hooks/useRestaurantDetail';
import { RestaurantMenuSection } from '@/features/restaurant/detail/menu/RestaurantMenuSection';
import { RestaurantReviewSection } from '@/features/restaurant/detail/review/RestaurantReviewSection';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function RestaurantDetailPage({ params }: Props) {
  const { id } = use(params);

  const { data, isLoading, isError } = useRestaurantDetail(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Restaurant not found</div>;
  }

  const restaurant = data.data;

  return (
    <PageContainer>
      <div
        className='
          py-8
          space-y-8
        '
      >
        <RestaurantGallery images={restaurant.images} />

        <RestaurantHeader
          name={restaurant.name}
          logo={restaurant.logo}
          rating={restaurant.averageRating}
          place={restaurant.place}
          distance={restaurant.distance}
        />

        <hr className='border-border' />
      </div>

      <RestaurantMenuSection menus={restaurant.menus} />

      <hr className='border-border' />

      <RestaurantReviewSection
        reviews={restaurant.reviews}
        rating={restaurant.averageRating}
      />
    </PageContainer>
  );
}
