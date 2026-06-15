'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

interface ReviewRatingProps {
  value: number;
  onChange: (rating: number) => void;
}

export default function ReviewRating({ value, onChange }: ReviewRatingProps) {
  const [hovered, setHovered] = useState(0);

  return (
    <div
      className='
        flex
        items-center
        justify-center
        gap-1
      '
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const rating = index + 1;

        const active = rating <= (hovered || value);

        return (
          <button
            key={rating}
            type='button'
            onClick={() => onChange(rating)}
            onMouseEnter={() => setHovered(rating)}
            onMouseLeave={() => setHovered(0)}
            className='
              cursor-pointer
            '
          >
            <Star
              className='
              h-10
              w-10
              md:h-12
              md:w-12
            '
              fill={active ? '#FDB022' : '#A4A7AE'}
              color={active ? '#FDB022' : '#A4A7AE'}
            />
          </button>
        );
      })}
    </div>
  );
}
