import { MapPin } from 'lucide-react';

type Props = {
  address: string;
  phone: string;
};

export function DeliveryAddressCard({ address, phone }: Props) {
  return (
    <div
      className='
        rounded-2xl
        bg-white
        p-5
        shadow-card
      '
    >
      <div
        className='
          flex
          items-center
          gap-2
        '
      >
        <MapPin
          className='
            size-6
            text-primary
          '
        />

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
          Delivery Address
        </h2>
      </div>

      <div className='mt-4 space-y-2'>
        <p
          className='
            text-sm
            leading-sm
            md:text-md
            md:leading-md
            font-medium
            tracking-tight
          '
        >
          {address}
        </p>

        <p
          className='
            text-sm
            leading-sm
            md:text-md
            md:leading-md
            font-medium
            tracking-tight
          '
        >
          {phone}
        </p>
      </div>

      <button
        className='
          mt-6
          h-11
          rounded-full
          border
          border-border
          px-8
          text-sm
          font-bold
        '
      >
        Change
      </button>
    </div>
  );
}
