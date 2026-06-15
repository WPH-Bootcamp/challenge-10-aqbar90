import Image from 'next/image';

import Logo from '@/assets/icons/logo.svg';

export function SuccessHeader() {
  return (
    <div
      className='
        flex
        items-center
        gap-3.75
      '
    >
      <Image src={Logo} alt='Foody' width={42} height={42} />

      <h1
        className='
          text-display-md
          leading-display-md
          font-extrabold
        '
      >
        Foody
      </h1>
    </div>
  );
}
