import Image from 'next/image';

import Logo from '@/assets/icons/logo.svg';
import Link from 'next/link';

export function SuccessHeader() {
  return (
    <Link
      href='/dashboard'
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
    </Link>
  );
}
