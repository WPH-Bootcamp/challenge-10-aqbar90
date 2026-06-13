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
            h-16
            w-16
            rounded-full
            object-cover
          '
        />

        <div>
          <h3
            className='
              text-lg
              font-extrabold
            '
          >
            {review.user.name}
          </h3>

          <p
            className='
              text-md
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
              size-5
              fill-[#FFAB0D]
              text-[#FFAB0D]
            '
          />
        ))}
      </div>

      <p
        className='
          text-md
          leading-md
        '
      >
        {review.comment}
      </p>
    </article>
  );
}
