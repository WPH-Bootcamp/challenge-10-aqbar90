import { ORDER_STATUSES } from '../constants/order-statuses';

type Props = {
  activeStatus: string;

  onChange: (status: string) => void;
};

export function OrdersStatusTabs({ activeStatus, onChange }: Props) {
  return (
    <div className='mt-6'>
      <div
        className='
          mt-4
          flex
          gap-3
          overflow-x-auto
          pb-1
          scrollbar-hide
        '
      >
        <h2
          className='
          mt-2
          text-sm
          leading-sm
          font-bold
          md:text-lg
          md:leading-lg
        '
        >
          Status
        </h2>

        {ORDER_STATUSES.map((status) => (
          <button
            key={status.value}
            onClick={() => onChange(status.value)}
            className={
              activeStatus === status.value
                ? `
                  whitespace-nowrap
                  rounded-full
                  border
                  border-primary
                  bg-primary/10
                  px-4
                  md:px-5
                  py-2
                  text-sm
                  leading-sm
                  md:text-md
                  md:leading-md
                  font-bold
                  text-primary
                `
                : `
                  whitespace-nowrap

                  rounded-full
                  border
                  border-border
                  px-4
                  md:px-5
                  py-2
                  text-sm
                  leading-sm
                  md:text-md
                  md:leading-md
                  font-semibold
                `
            }
          >
            {status.label}
          </button>
        ))}
      </div>
    </div>
  );
}
