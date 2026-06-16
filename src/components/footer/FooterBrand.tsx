import Image from 'next/image';

import logo from '@/assets/icons/logo.svg';

export default function FooterBrand() {
  return (
    <div
      className='
        flex
        flex-col
        gap-4
      '
    >
      <div
        className='
          flex
          items-center
          gap-3.75
        '
      >
        <Image src={logo} alt='Foody' width={42} height={42} />

        <h2
          className='
            text-display-md
            leading-display-md
            font-extrabold
            text-white
          '
        >
          Foody
        </h2>
      </div>

      <p
        className='
          text-sm
          leading-sm
          md:text-md
          md:leading-md
          md:tracking-tight
          text-white
        '
      >
        Enjoy homemade flavors & chef&apos;s signature dishes, freshly prepared
        every day. Order online or visit our nearest branch.
      </p>
    </div>
  );
}
