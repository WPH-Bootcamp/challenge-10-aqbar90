type Props = {
  restaurantId: number;
};

export function CartCheckoutButton({ restaurantId }: Props) {
  return (
    <button
      data-restaurant-id={restaurantId}
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
