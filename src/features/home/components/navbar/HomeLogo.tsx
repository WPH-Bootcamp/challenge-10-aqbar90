import Image from 'next/image';

import logoWhite from '@/assets/images/logo/logo-white.svg';
import logoRed from '@/assets/icons/logo.svg';
import Link from 'next/link';

type HomeLogoProps = {
  isScrolled: boolean;
};

export function HomeLogo({ isScrolled }: HomeLogoProps) {
  return (
    <Link href='/dashboard' className='flex items-center gap-5'>
      <Image
        src={isScrolled ? logoRed : logoWhite}
        alt='Foody Logo'
        width={36}
        height={36}
        priority
      />

      <span
        className={`
          hidden
          md:block
          text-display-md
          font-extrabold
          leading-display-md
          transition-colors
          duration-300
          ${isScrolled ? ' text-black' : 'text-white '}
        `}
      >
        Foody
      </span>
    </Link>
  );
}
