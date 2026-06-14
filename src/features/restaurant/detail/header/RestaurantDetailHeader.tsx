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
        items-start
        md:items-center
        justify-between
        gap-4
      '
    >
      <div className='flex items-center gap-4'>
        <Image
          src={logo}
          alt={name}
          width={120}
          height={120}
          className='
            h-22.5
            w-22.5
            md:h-30
            md:w-30
            rounded-full
            object-cover
          '
        />

        <div className='min-w-0 space-y-2'>
          <h1
            className='
              text-md
              leading-md
              md:text-display-md
              md:leading-display-md
              font-extrabold
            '
          >
            {name}
          </h1>

          <div className='flex items-center gap-1'>
            <Star
              className='
                size-4
                md:size-5
                fill-[#FFAB0D]
                text-[#FFAB0D]
              '
            />

            <span
              className='
                text-sm
                leading-sm
                md:text-lg
                md:leading-lg
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
              text-sm
              leading-sm
              md:text-lg
              md:leading-lg
              text-muted-foreground
              font-medium
            '
          >
            <span>{place}</span>

            {distance && (
              <>
                <span>•</span>
                <span>{distance} km</span>
              </>
            )}
          </div>
        </div>
      </div>

      <button
        className='
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          gap-3
          rounded-full
          border
          md:w-auto
          md:px-4
        '
      >
        <Share2 className='size-4 md:size-5' />

        <span className='hidden font-bold md:block'>Share</span>
      </button>
    </section>
  );
}
