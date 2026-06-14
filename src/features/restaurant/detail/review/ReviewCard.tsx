import Image from 'next/image';
import { Star } from 'lucide-react';

import type { RestaurantReview } from '../types/restaurant-detail.types';
import avatarDefault from '@/assets/images/navbar/default-avatar.svg';

type Props = {
  review: RestaurantReview;
};

export function ReviewCard({ review }: Props) {
  const avatar = review.user.avatar?.trim()
    ? review.user.avatar
    : avatarDefault;

  return (
    <article
      className='
        h-full
        rounded-2xl
        bg-white
        p-4
        shadow-card
      '
    >
      <div className='mb-4 flex items-start gap-3'>
        <Image
          src={avatar}
          alt={review.user.name}
          width={64}
          height={64}
          className='
            h-12
            w-12
            md:h-16
            md:w-16
            rounded-full
            object-cover
          '
        />

        <div>
          <h3
            className='
              text-sm
              leading-sm
              md:text-lg
              md:leading-lg
              font-extrabold
            '
          >
            {review.user.name}
          </h3>

          <p
            className='
              text-xs
              leading-text-xs
              md:text-md
              md:leading-md
              text-muted-foreground
            '
          >
            {new Date(review.createdAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>

      <div className='mb-2 flex items-center gap-1'>
        {Array.from({
          length: review.star,
        }).map((_, index) => (
          <Star
            key={index}
            className='
              size-4
              md:size-5
              fill-[#FFAB0D]
              text-[#FFAB0D]
            '
          />
        ))}
      </div>

      <p
        className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
        '
      >
        {review.comment}
      </p>
    </article>
  );
}
