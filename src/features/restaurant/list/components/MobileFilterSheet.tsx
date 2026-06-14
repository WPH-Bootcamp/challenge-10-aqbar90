'use client';

import { SlidersHorizontal, X } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';

import { DistanceFilter } from './DistanceFilter';
import { PriceFilter } from './PriceFilter';
import { RatingFilter } from './RatingFilter';

import type { RestaurantFilters } from '@/features/restaurant/types/restaurant.types';

type Props = {
  filters: RestaurantFilters;
  setFilters: React.Dispatch<React.SetStateAction<RestaurantFilters>>;
};

export function MobileFilterSheet({ filters, setFilters }: Props) {
  const handleClearFilters = () => {
    setFilters({
      range: undefined,
      priceMin: undefined,
      priceMax: undefined,
      rating: undefined,
      page: 1,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className='
            flex
            h-13
            w-full
            items-center
            justify-between
            rounded-xl
            bg-white
            px-4
            shadow-card
            md:hidden
          '
        >
          <span
            className='
              text-sm
              font-extrabold
              uppercase
            '
          >
            Filter
          </span>

          <SlidersHorizontal className='size-5' />
        </button>
      </SheetTrigger>

      <SheetContent
        side='left'
        className='
          w-74.5
          overflow-visible
          p-4
         
        '
      >
        <SheetClose asChild>
          <button
            className='
            absolute
            top-10
            -right-6
            z-100
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-lg
          '
          >
            <X className='size-4 text-muted-foreground' />
          </button>
        </SheetClose>
        <div
          className='
            h-full
            overflow-y-auto
          '
        >
          <div
            className='
            flex
            flex-col
            gap-2
            
          '
          >
            <h2
              className='
              text-md
              leading-md
              font-extrabold
              uppercase
              pt-5
            '
            >
              <SheetHeader>
                <SheetTitle>Filter</SheetTitle>
              </SheetHeader>
            </h2>

            <DistanceFilter filters={filters} setFilters={setFilters} />

            <hr className='border-border' />

            <PriceFilter filters={filters} setFilters={setFilters} />

            <hr className='border-border' />

            <RatingFilter filters={filters} setFilters={setFilters} />

            <Button
              variant='outline'
              onClick={handleClearFilters}
              className='mt-2'
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
