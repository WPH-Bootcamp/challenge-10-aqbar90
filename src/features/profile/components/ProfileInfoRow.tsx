type Props = {
  label: string;
  value: string;
};

export function ProfileInfoRow({ label, value }: Props) {
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
        className='
          text-md
          leading-md
          font-bold
        '
      >
        {value}
      </span>
    </div>
  );
}
