import Image from 'next/image';
import { Share2, Star } from 'lucide-react';

type Props = {
  name: string;
  logo: string;
  rating: number;
  place: string;
  distance: number;
};

export function RestaurantHeader({
  name,
  logo,
  rating,
  place,
  distance,
}: Props) {
  return (
    <section
      className='
        flex
        items-center
        justify-between
      '
    >
      <div className='flex items-center gap-4'>
        <Image
          src={logo}
          alt={name}
          width={120}
          height={120}
          className='
            rounded-full
            object-cover
          '
        />

        <div className='space-y-1'>
          <h1
            className='
              text-display-md
              leading-display-md
              font-extrabold
            '
          >
            {name}
          </h1>

          <div className='flex items-center gap-1'>
            <Star
              className='
                size-5
                fill-[#FFAB0D]
                text-[#FFAB0D]
              '
            />

            <span
              className='
                text-lg
                font-semibold
              '
            >
              {rating}
            </span>
          </div>

          <div
            className='
              flex
              items-center
              gap-2
              text-lg
              font-medium
            '
          >
            <span>{place}</span>

            {distance && (
              <>
                <span>•</span>
                <span>{distance !== undefined && distance !== null} km</span>
              </>
            )}
          </div>
        </div>
      </div>

      <button
        className='
          flex
          h-11
          items-center
          gap-3
          rounded-full
          border
          px-4
        '
      >
        <Share2 className='size-5' />

        <span className='font-bold'>Share</span>
      </button>
    </section>
  );
}
