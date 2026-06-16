import { helpItems } from './footer-data';

export default function FooterHelp() {
  return (
    <div
      className='
        flex
        flex-col
        gap-4
      '
    >
      <h3
        className='
          text-sm
          font-extrabold
          text-white
        '
      >
        Help
      </h3>

      {helpItems.map((item) => (
        <p
          key={item}
          className='
            text-sm
            text-white
          '
        >
          {item}
        </p>
      ))}
    </div>
  );
}
