import { Search } from 'lucide-react';

type Props = {
  value: string;

  onChange: (value: string) => void;
};

export function OrdersSearch({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search'
    />
  );
}
<div
  className='
        flex
        h-11
        w-full
        md:max-w-149.5
        items-center
        gap-1.5
        rounded-full
        border
        border-border
        px-4
        py-2
        
      '
>
  <Search
    className='
          size-5
          text-muted-foreground
        '
  />

  <input
    type='text'
    placeholder='Search'
    className='
          flex-1
          bg-transparent
          text-sm
          leading-sm
          font-normal
          outline-none
          placeholder:text-muted-foreground
        '
  />
</div>;
