import { Skeleton } from '@/components/ui/skeleton';

export function RestaurantCardSkeleton() {
  return (
    <div
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
      <Skeleton
        className='
          h-24
          w-24
          rounded-xl
        '
      />

      <div
        className='
          flex
          flex-1
          flex-col
          gap-3
        '
      >
        <Skeleton className='h-5 w-40' />

        <Skeleton className='h-4 w-16' />

        <Skeleton className='h-4 w-28' />
      </div>
    </div>
  );
}
