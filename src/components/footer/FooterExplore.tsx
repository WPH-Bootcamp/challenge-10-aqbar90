import { exploreItems } from './footer-data';

export default function FooterExplore() {
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
        Explore
      </h3>

      {exploreItems.map((item) => (
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
