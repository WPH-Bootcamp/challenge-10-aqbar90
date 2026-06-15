type Props = {
  label: string;
  value: string;
  bold?: boolean;
};

export function SuccessSummaryRow({ label, value, bold = true }: Props) {
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
          text-md
          leading-md
          font-medium
        '
      >
        {label}
      </span>

      <span
        className={`
          text-md
          leading-md
          ${bold ? 'font-bold' : 'font-medium'}
        `}
      >
        {value}
      </span>
    </div>
  );
}
