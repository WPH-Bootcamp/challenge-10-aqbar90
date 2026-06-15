'use client';

import { CheckoutRestaurantCard } from '../components/CheckoutRestaurantCard';
import { DeliveryAddressCard } from '../components/DeliveryAddressCard';

import { useCart } from '@/features/cart/hooks/useCart';
import { PaymentMethodSection } from '../components/PaymentMethodSection';
import { useState } from 'react';
import { PaymentSummarySection } from '../components/PaymentSummarySection';
import { useCheckout } from '../hooks/useCheckout';

import { useRouter } from 'next/navigation';

import { useCheckoutStore } from '@/stores/checkout-store';

import { useSearchParams } from 'next/navigation';

export function CheckoutPageContent() {
  const { data } = useCart();

  const router = useRouter();

  const setCheckoutData = useCheckoutStore((state) => state.setCheckoutData);

  const searchParams = useSearchParams();

  const selectedRestaurantId = Number(searchParams.get('restaurantId'));

  const [selectedPayment, setSelectedPayment] = useState(
    'Bank Negara Indonesia'
  );

  const selectedRestaurant = data?.data.cart.find(
    (restaurant) => restaurant.restaurant.id === selectedRestaurantId
  );

  const restaurants = selectedRestaurant
    ? [
        {
          restaurantId: selectedRestaurant.restaurant.id,

          items: selectedRestaurant.items.map((item) => ({
            menuId: item.menu.id,
            quantity: item.quantity,
          })),
        },
      ]
    : [];

  const itemCount =
    selectedRestaurant?.items.reduce(
      (total, item) => total + item.quantity,
      0
    ) ?? 0;

  const subtotal = selectedRestaurant?.subtotal ?? 0;

  const DELIVERY_FEE = 10000;

  const SERVICE_FEE = 1000;

  const { mutate: placeOrder } = useCheckout();

  const handleBuy = () => {
    const payload = {
      restaurants,

      deliveryAddress: 'Jl. Sudirman No. 25, Jakarta Pusat',

      phone: '081234567890',

      paymentMethod: selectedPayment,

      notes: '',
    };

    placeOrder(payload, {
      onSuccess: (response) => {
        const transaction = response.data.transaction;

        setCheckoutData({
          transactionId: transaction.transactionId,

          paymentMethod: transaction.paymentMethod,

          itemCount,

          subtotal: transaction.pricing.subtotal,

          deliveryFee: transaction.pricing.deliveryFee,

          serviceFee: transaction.pricing.serviceFee,

          totalPrice: transaction.pricing.totalPrice,

          createdAt: transaction.createdAt,
        });

        router.push('/checkout/success');
      },
    });
  };

  return (
    <section
      className='
        flex
        flex-col
        mx-auto
        max-w-250
        px-4
        py-20
        md:py-12
        md:flex-row
      '
    >
      <h1
        className='
          text-display-xs
          leading-display-xs
          mb-6
          md:text-display-md
          md:leading-display-md
          font-extrabold
        '
      >
        Checkout
      </h1>

      <div
        className='
          flex
          flex-col
          gap-5
          lg:flex-row
        '
      >
        {/* Left Column */}
        <div
          className='
            flex-1
            space-y-5
          '
        >
          <div
            className='
              min-h-40
              rounded-2xl
              bg-white
              p-5
              shadow-card
            '
          >
            <DeliveryAddressCard
              address='Jl. Sudirman No. 25, Jakarta Pusat, 10220'
              phone='0812-3456-7890'
            />
          </div>

          <div
            className='
              min-h-65
              rounded-2xl
              bg-white
              p-5
              shadow-card
            '
          >
            {selectedRestaurant && (
              <CheckoutRestaurantCard restaurant={selectedRestaurant} />
            )}
          </div>
        </div>

        {/* Right Column */}
        <div
          className='
            w-full
            md:w-97.5
          '
        >
          <div
            className='
              relative
              min-h-130
              p-5
              rounded-2xl
              bg-white
              shadow-card
            '
          >
            <PaymentMethodSection
              value={selectedPayment}
              onChange={setSelectedPayment}
            />

            <PaymentSummarySection
              itemCount={itemCount}
              subtotal={subtotal}
              deliveryFee={10000}
              serviceFee={1000}
              onBuy={handleBuy}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
