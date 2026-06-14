import Image from 'next/image';
import { Star } from 'lucide-react';

import type { Restaurant } from '../types/restaurant.types';
import Link from 'next/link';

type Props = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: Props) {
  return (
    <Link
      className='
        block
        transition-all
        hover:-translate-y-1
      '
      href={`/restaurant/${restaurant.id}`}
    >
      <article
        className='
        flex
        items-center
        gap-4
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
          h-24
          w-24
          rounded-xl
          object-cover
          md:h-26
          md:w-26
        '
        />

        <div className='flex flex-col gap-2'>
          <h3
            className='
            line-clamp-1
            text-md
            font-extrabold
            md:text-lg
          '
          >
            {restaurant.name}
          </h3>

          <div className='flex items-center gap-1'>
            <Star
              className='
              size-4
              fill-yellow-400
              text-yellow-400
            '
            />

            <span
              className='
              text-sm
              font-medium
              md:text-base
            '
            >
              {restaurant.star}
            </span>
          </div>

          <div
            className='
            flex
            items-center
            gap-2
            text-xs
            text-muted-foreground
            md:text-base
          '
          >
            <span>{restaurant.place}</span>

            {restaurant.distance && (
              <>
                <span>•</span>
                <span>{restaurant.distance} km</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
