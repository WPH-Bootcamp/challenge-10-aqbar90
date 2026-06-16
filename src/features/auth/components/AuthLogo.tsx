import Image from 'next/image';

import logo from '@/assets/icons/logo.svg';
import Link from 'next/link';

type AuthLogoProps = {
  size?: 'desktop' | 'mobile';
};

export function AuthLogo({ size = 'desktop' }: AuthLogoProps) {
  const dimensions =
    size === 'mobile'
      ? {
          width: 32,
          height: 32,
        }
      : {
          width: 42,
          height: 42,
        };
  {
    return (
      <Link href='/dashboard' className='flex items-center gap-3.75'>
        <Image
          src={logo}
          alt='Foody Logo'
          width={dimensions.width}
          height={dimensions.height}
          priority
        />

        <span className=' text-display-sm leading-display-sm lg:text-display-md lg:leading-display-md font-extrabold font-sans text-foreground'>
          Foody
        </span>
      </Link>
    );
  }
}
