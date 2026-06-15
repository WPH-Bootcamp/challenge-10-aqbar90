type Props = {
  value: string;
  onChange: (value: string) => void;
};

const PAYMENT_METHODS = [
  'Bank Negara Indonesia',
  'Bank Rakyat Indonesia',
  'Bank Central Asia',
  'Mandiri',
];

export function PaymentMethodSection({ value, onChange }: Props) {
  return (
    <div
      className='
        rounded-t-2xl
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
        Payment Method
      </h2>

      <div className='mt-5'>
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method}
            type='button'
            onClick={() => onChange(method)}
            className='
              flex
              w-full
              items-center
              justify-between
              border-b
              border-border
              py-4
              text-left
            '
          >
            <span
              className='
                text-sm
                leading-sm
                md:text-md
                md:leading-md
                tracking-tight
                font-normal
              '
            >
              {method}
            </span>

            <div
              className={`
                h-6
                w-6
                rounded-full
                border-2
                ${value === method ? 'border-primary' : 'border-border'}
              `}
            >
              {value === method && (
                <div
                  className='
                    m-1
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-primary
                  '
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
