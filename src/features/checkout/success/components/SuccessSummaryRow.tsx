type Props = {
  label: string;
  value: string;
};

export function SuccessSummaryRow({ label, value }: Props) {
  return (
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
          font-medium
        '
      >
        {label}
      </span>

      <span
        className={`
          text-sm
          leading-sm
          md:text-md
          md:leading-md
          font-semibold
        `}
      >
        {value}
      </span>
    </div>
  );
}
