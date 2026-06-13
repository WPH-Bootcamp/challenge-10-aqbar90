type Props = {
  totalItems: number;
  totalPrice: number;
};

export function CheckoutBar({ totalItems, totalPrice }: Props) {
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
        bg-white
        shadow-lg
      '
    >
      <div
        className='
          mx-auto
          flex
          max-w-360
          items-center
          justify-between
          px-8
          py-4
        '
      >
        <div>
          <p
            className='
              text-sm
              text-muted-foreground
            '
          >
            {totalItems} Items
          </p>

          <p
            className='
              text-2xl
              font-extrabold
            '
          >
            Rp{totalPrice.toLocaleString('id-ID')}
          </p>
        </div>

        <button
          className='
            rounded-full
            bg-primary
            px-12
            py-3
            font-bold
            text-white
          '
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
