import Link from 'next/link';
import { ReceiptText } from 'lucide-react';

export function OrdersEmptyState() {
  return (
    <div
      className='
        flex
        flex-col
        items-center
        justify-center
        py-16
        text-center
      '
    >
      <div
        className='
          mb-4
          rounded-full
          bg-primary/10
          p-4
        '
      >
        <ReceiptText
          className='
            h-8
            w-8
            text-primary
          '
        />
      </div>

      <h3
        className='
          text-lg
          leading-lg
          font-extrabold
        '
      >
        No Orders Yet
      </h3>

      <p
        className='
          mt-2
          max-w-70
          text-sm
          leading-sm
          text-muted-foreground
        '
      >
        You haven`&apos;`t placed any orders yet. Explore restaurants and start
        ordering your favorite food.
      </p>

      <Link
        href='/'
        className='
          mt-6
          flex
          h-11
          items-center
          justify-center
          rounded-full
          bg-primary
          px-6
          text-sm
          font-bold
          text-white
        '
      >
        Explore Foods
      </Link>
    </div>
  );
}
