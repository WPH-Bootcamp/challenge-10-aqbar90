type MenuType = 'all' | 'food' | 'drink';

type Props = {
  selected: MenuType;
  onChange: (value: MenuType) => void;
};

const filters: MenuType[] = ['all', 'food', 'drink'];

export function MenuFilter({ selected, onChange }: Props) {
  return (
    <div className='flex items-center gap-3'>
      {filters.map((filter) => {
        const active = selected === filter;

        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`
              rounded-full
              border
              px-4
              py-2
              text-md
              transition-colors
              ${
                active
                  ? 'border-primary bg-[#FFECEC] text-primary font-bold'
                  : 'border-border font-semibold'
              }
            `}
          >
            {filter === 'all'
              ? 'All Menu'
              : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
