type Props = {
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  onBuy: () => void;
};

export function PaymentSummarySection({
  itemCount,
  subtotal,
  deliveryFee,
  serviceFee,
  onBuy,
}: Props) {
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <div
      className='
        rounded-b-2xl
        bg-white
        p-5
      '
    >
      <h2
        className='
          text-md
          leading-md
          md:text-lg
          md:leading-lg
          font-extrabold
          tracking-tight
        '
      >
        Payment Summary
      </h2>

      <div className='mt-5 space-y-4'>
        <div
          className='
            flex
            items-center
            justify-between
          '
        >
          <span
            className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
          font-medium'
          >
            Price ({itemCount} items)
          </span>

          <span
            className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
          font-bold'
          >
            Rp
            {subtotal.toLocaleString('id-ID')}
          </span>
        </div>

        <div
          className='
            flex
            items-center
            justify-between
          '
        >
          <span
            className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
          font-normal'
          >
            Delivery Fee
          </span>

          <span
            className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
          font-bold'
          >
            Rp
            {deliveryFee.toLocaleString('id-ID')}
          </span>
        </div>

        <div
          className='
            flex
            items-center
            justify-between
          '
        >
          <span className='text-md leading-md font-normal'>Service Fee</span>

          <span className='text-md leading-md font-extraboldbold'>
            Rp
            {serviceFee.toLocaleString('id-ID')}
          </span>
        </div>

        <div
          className='
            pt-2
            flex
            items-center
            justify-between
          '
        >
          <span
            className='
              text-md
              leading-md
              md:text-lg
              md:leading-lg
              font-extrabold
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
            {total.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      <button
        onClick={onBuy}
        className='
          h-11
          w-full
          rounded-full
          bg-primary
          text-md
          leading-md
          md:text-lg
          md:leading-lg
          font-bold
          text-white
        '
      >
        Buy
      </button>
    </div>
  );
}
