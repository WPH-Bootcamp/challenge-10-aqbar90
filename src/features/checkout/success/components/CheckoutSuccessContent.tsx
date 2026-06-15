'use client';

import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

import { SuccessHeader } from './SuccessHeader';
import { SuccessSummaryRow } from './SuccessSummaryRow';
import { useCheckoutStore } from '@/stores/checkout-store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function CheckoutSuccessContent() {
  const router = useRouter();

  const checkoutData = useCheckoutStore((state) => state.checkoutData);

  useEffect(() => {
    if (!checkoutData) {
      router.replace('/cart');
    }
  }, [checkoutData, router]);

  if (!checkoutData) {
    return null;
  }

  return (
    <section
      className='
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        px-4
        py-12
      '
    >
      <div
        className='
          flex
          flex-col
          items-center
          gap-7
        '
      >
        <SuccessHeader />

        <div
          className='
            relative
            w-full
            max-w-107
            rounded-2xl
            bg-white
            p-4
            md:p-5
            shadow-card
          '
        >
          {/* Notch Top */}
          <div
            className='
              absolute
              -left-2.5
              top-37.5
              md:top-39.5
              size-5
              rounded-full
              bg-background
            '
          />

          <div
            className='
              absolute
              -right-2.5
              top-37.5
              md:top-39.5
              size-5
              rounded-full
              bg-background
            '
          />

          {/* Notch Bottom */}
          <div
            className='
              absolute
              -left-2.5
              top-96.5
              md:top-101
              size-5
              rounded-full
              bg-background
            '
          />

          <div
            className='
              absolute
              -right-2.5
              top-96.5
              md:top-101
              size-5
              rounded-full
              bg-background
            '
          />

          {/* Success Info */}
          <div
            className='
              flex
              flex-col
              items-center
              gap-0.5
            '
          >
            <CheckCircle2
              className='
                size-16
                fill-[#44AB09]
                text-white
              '
            />

            <h2
              className='
                text-xl
                leading-xl
                font-extrabold
              '
            >
              Payment Success
            </h2>

            <p
              className='
                text-center
                text-md
                leading-md
              '
            >
              Your payment has been successfully processed.
            </p>
          </div>

          <hr
            className='
              my-4
              border-dashed
              border-border
            '
          />

          <div className='space-y-3'>
            <SuccessSummaryRow
              label='Date'
              value={
                checkoutData?.createdAt
                  ? new Date(checkoutData.createdAt).toLocaleString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : '-'
              }
            />
            <SuccessSummaryRow
              label='Payment Method'
              value={checkoutData?.paymentMethod ?? '-'}
            />

            <SuccessSummaryRow
              label={`Price (${checkoutData?.itemCount ?? 0} items)`}
              value={`Rp${(checkoutData?.subtotal ?? 0).toLocaleString(
                'id-ID'
              )}`}
            />

            <SuccessSummaryRow
              label='Delivery Fee'
              value={`Rp${(checkoutData?.deliveryFee ?? 0).toLocaleString(
                'id-ID'
              )}`}
            />

            <SuccessSummaryRow
              label='Service Fee'
              value={`Rp${(checkoutData?.serviceFee ?? 0).toLocaleString(
                'id-ID'
              )}`}
            />
          </div>

          <hr
            className='
              my-4
              border-dashed
              border-border
            '
          />

          <div
            className='
              flex
              items-center
              justify-between
              mb-6
            '
          >
            <span
              className='
                text-md
                leading-md
                md:text-lg
                md:leading-lg
                font-normal
              '
            >
              Total
            </span>

            <span
              className='
                text-md
                leading-md
                md:text-lg
                md:leading-lg
                font-extrabold
              '
            >
              Rp
              {(checkoutData?.totalPrice ?? 0).toLocaleString('id-ID')}
            </span>
          </div>

          <Link
            href='/orders'
            className='
              flex
              h-11
              w-full
              items-center
              justify-center
              rounded-full
              bg-primary
              text-md
              font-bold
              text-white
            '
          >
            See My Orders
          </Link>
        </div>
      </div>
    </section>
  );
}
