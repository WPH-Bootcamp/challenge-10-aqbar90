import Image from 'next/image';
import Link from 'next/link';

import cartWhite from '@/assets/images/navbar/cart-white.svg';
import cartBlack from '@/assets/images/navbar/cart-dark.svg';
import defaultAvatar from '@/assets/images/navbar/default-avatar.svg';

import { useAuthStore } from '@/stores/auth-store';
import { UserDropdown } from './UserDropDown';

type NavbarUserProps = {
  isScrolled: boolean;
};

export function NavbarUser({ isScrolled }: NavbarUserProps) {
  const user = useAuthStore((state) => state.user);
  console.log('USER STORE', user);

  return (
    <div className=' flex items-center gap-6'>
      <div className='relative'>
        <Link href='/cart' className='relative cursor-pointer'>
          <Image
            src={isScrolled ? cartBlack : cartWhite}
            alt='Cart'
            width={24}
            height={24}
          />
        </Link>
      </div>
      <UserDropdown>
        <button className='flex items-center gap-4 cursor-pointer rounded-full transition-colors hover:bg-black/5 px-3 py-1'>
          <Image
            src={user?.avatar || defaultAvatar}
            alt={user?.name ?? 'User'}
            width={40}
            height={40}
            className='rounded-full object-cover'
          />

          <span
            className={`
            hidden
            md:block
            text-sm
            font-semibold
            transition-colors
            duration-300
            ${isScrolled ? 'text-black' : 'text-white'}
          `}
          >
            {user?.name}
          </span>
        </button>
      </UserDropdown>
    </div>
  );
}
