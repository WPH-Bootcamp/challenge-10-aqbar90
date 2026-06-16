import Image from 'next/image';

import CartIcon from '@/assets/images/navbar/cart-dark.svg';

import { PageContainer } from '@/components/layout/PageContainer';

import Link from 'next/link';

type Props = {
  restaurantId: number;
  totalItems: number;
  totalPrice: number;
};

export function CheckoutBar({ totalItems, totalPrice, restaurantId }: Props) {
  if (totalItems === 0) {
    return null;
  }

  return (
    <div
      className='
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-border
        bg-background/95
        backdrop-blur-sm
      '
    >
      <PageContainer>
        <div
          className='
            flex
            min-h-24
            items-center
            justify-between
          '
        >
          <div>
            <div className='flex items-center gap-3'>
              <Image src={CartIcon} alt='Cart' width={20} height={20} />

              <p
                className='
              text-sm
              text-muted-foreground
            '
              >
                {totalItems} Items
              </p>
            </div>
            <p
              className='
              text-2xl
              font-extrabold
            '
            >
              Rp{totalPrice.toLocaleString('id-ID')}
            </p>
          </div>

          <Link
            href={`/checkout?restaurantId=${restaurantId}`}
            className='
            rounded-full
            bg-primary
            px-12
            py-3
            font-bold
            text-primary-foreground
            transition-colors
            hover:opacity-90
          '
          >
            Checkout
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
