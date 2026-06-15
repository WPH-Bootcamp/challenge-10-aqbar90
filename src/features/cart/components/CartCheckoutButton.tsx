'use client';

import { useRouter } from 'next/navigation';

type Props = {
  restaurantId: number;
};

export function CartCheckoutButton({ restaurantId }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/checkout?restaurantId=${restaurantId}`)}
      className='
        h-11
        w-full
        rounded-full
        bg-primary
        text-sm
        leading-sm
        font-bold
        text-white
      '
    >
      Checkout
    </button>
  );
}
