import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

import type { RecommendedRestaurant } from '@/features/restaurant/types/restaurant.types';

type Props = {
  restaurant: RecommendedRestaurant;
};

export function RecommendedCard({ restaurant }: Props) {
  return (
    <Link
      href={`/restaurant/${restaurant.id}`}
      className='
        block
        transition-all
        hover:-translate-y-1
      '
    >
      <article
        className='
        flex
        items-center
        gap-3
        rounded-2xl
        bg-white
        p-4
        shadow-card
      '
      >
        <Image
          src={restaurant.logo}
          alt={restaurant.name}
          width={120}
          height={120}
          className='
          h-30
          w-30
          rounded-xl
          object-cover
        '
        />

        <div className='mt-3 space-y-2'>
          <h3
            className='
          text-lg
          font-extrabold
          leading-lg
          tracking-tight
          text-primary'
          >
            {restaurant.name}
          </h3>

          <div className='flex items-center gap-1'>
            <Star
              className='
              size-6
              fill-[#FFAB0D]
              text-[#FFAB0D]
            '
            />

            <span
              className='
            text-md
            font-medium
            leading-md
            tracking-tight
          '
            >
              {restaurant.star}
            </span>
          </div>
          <div className='flex items-center gap-1.5'>
            <span className='text-sm text-muted-foreground'>
              {restaurant.place}
            </span>
            <span>·</span>
            <span className='text-sm text-muted-foreground'>
              {restaurant.distance ?? 0} km
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
