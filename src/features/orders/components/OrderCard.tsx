import Image from 'next/image';
import type { Order } from '@/features/orders/types/order.types';
import { ORDER_STATUS } from '../utils/order-status';
import { useReviewModal } from '@/features/review/hooks/useReviewModal';

type Props = {
  order: Order;
};

export function OrderCard({ order }: Props) {
  const restaurant = order.restaurants[0];

  const item = restaurant.items[0];

  const statusConfig = ORDER_STATUS[
    order.status as keyof typeof ORDER_STATUS
  ] ?? {
    label: order.status,
    className: `
      bg-muted
      border-border
      text-muted-foreground
    `,
  };
  console.log(order.status);

  const { open } = useReviewModal();

  const handleOpenReview = () => {
    open({
      transactionId: order.transactionId,

      restaurantId: restaurant.restaurant.id,

      menuIds: restaurant.items.map((item) => item.menuId),
    });
  };

  return (
    <div
      className='
        rounded-2xl
        bg-white
        p-4
        md:p-6
        shadow-card
      '
    >
      {/* Restaurant Header */}
      <div
        className='
    flex
    items-start
    justify-between
    gap-4
  '
      >
        <div
          className='
      flex
      items-center
      gap-2
    '
        >
          <div
            className='
        h-8
        w-8
        rounded-md
        bg-muted
      '
          />

          <h3
            className='
        text-sm
        leading-sm
        font-bold
        md:text-lg
        md:leading-lg
        tracking-tight
      '
          >
            {restaurant.restaurant.name}
          </h3>
        </div>

        <span
          className={`
      whitespace-nowrap
      rounded-full
      border
      px-3
      py-1
      text-xs
      font-bold
      ${statusConfig.className}
    `}
        >
          {statusConfig.label}
        </span>
      </div>

      {/* Item */}
      <div
        className='
          mt-4
          flex
          items-center
          justify-between
        '
      >
        <div
          className='
            flex
            items-center
            gap-4.25
          '
        >
          <Image
            src={restaurant.restaurant.logo}
            alt={restaurant.restaurant.name}
            width={32}
            height={32}
            className='rounded-md object-cover'
          />

          <div>
            <Image
              src={item.image}
              alt={item.menuName}
              width={80}
              height={80}
              className='rounded-xl object-cover'
            />
            <h4
              className='
                text-sm
                leading-sm
                font-medium
                md:text-md
                md:leading-md
              '
            >
              {item.menuName}
            </h4>

            <p
              className='
                text-md
                leading-md
                font-extrabold
              '
            >
              Rp{item.price.toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      </div>

      <hr
        className='
          my-4
          border-border
        '
      />

      {/* Footer */}
      <div
        className='
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        '
      >
        <div>
          <p
            className='
              text-md
              leading-md
              font-medium
            '
          >
            Rp{order.pricing.totalPrice.toLocaleString('id-ID')}
          </p>
        </div>

        <button
          onClick={handleOpenReview}
          className='
    h-12
    w-full
    rounded-full
    bg-primary
    text-md
    leading-md
    font-bold
    text-white
    md:w-60
  '
        >
          Give Review
        </button>
      </div>
    </div>
  );
}
