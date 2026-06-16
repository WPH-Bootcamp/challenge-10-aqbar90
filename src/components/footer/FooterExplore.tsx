import { exploreItems } from './footer-data';

export default function FooterExplore() {
  return (
    <div
      className='
        flex
        flex-col
        gap-4
        md:w-50
      '
    >
      <h3
        className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
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
            leading-sm
            md:text-md
            md:leading-md
            md:tracking-tight
            text-white
          '
        >
          {item}
        </p>
      ))}
    </div>
  );
}
