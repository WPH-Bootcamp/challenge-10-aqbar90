'use client';

import { OrdersSidebar } from '@/features/orders/components/OrdersSidebar';

import { ProfileCard } from './ProfileCard';

export function ProfileContent() {
  return (
    <section
      className='
        mx-auto
        max-w-300
        px-4
        py-8
        md:px-30
        md:py-32
      '
    >
      <div
        className='
          flex
          gap-8
        '
      >
        <OrdersSidebar />

        <div
          className='
            w-full
            max-w-131
          '
        >
          <h1
            className='
              mb-6
              text-display-xs
              leading-display-xs
              md:text-display-md
              md:leading-display-md
              font-extrabold
            '
          >
            Profile
          </h1>

          <ProfileCard />
        </div>
      </div>
    </section>
  );
}
