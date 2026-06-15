import { Minus, Plus } from 'lucide-react';

type Props = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function QuantityControl({ quantity, onIncrease, onDecrease }: Props) {
  return (
    <div
      className='
        flex
        items-center
        gap-4
      '
    >
      <button
        onClick={onDecrease}
        className='
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-white
        '
      >
        <Minus className='size-4' />
      </button>

      <span
        className='
          min-w-4
          text-md
          leading-md
          font-semibold
          tracking-tight
          text-center
        '
      >
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className='
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-primary
          text-white
        '
      >
        <Plus className='size-4' />
      </button>
    </div>
  );
}
