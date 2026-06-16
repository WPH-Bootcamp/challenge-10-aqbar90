'use client';

import { useRouter } from 'next/navigation';
import { MapPin, ClipboardList, LogOut } from 'lucide-react';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useAuthStore } from '@/stores/auth-store';

import Image from 'next/image';

import defaultAvatar from '@/assets/images/navbar/default-avatar.svg';

type UserDropdownProps = {
  children: React.ReactNode;
};

export function UserDropdown({ children }: UserDropdownProps) {
  const router = useRouter();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const user = useAuthStore((state) => state.user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-60 rounded-2xl p-0'>
        <DropdownMenuSeparator />

        <div className='flex items-center gap-3 p-3'>
          <Image
            onClick={() => router.push('/profile')}
            src={user?.avatar || defaultAvatar}
            alt={user?.name ?? 'User'}
            width={40}
            height={40}
            className='rounded-full object-cover cursor-pointer'
          />

          <span className='truncate text-sm font-semibold'>{user?.name}</span>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='py-3 cursor-pointer'>
          <Link
            href='/address'
            className='
            flex
            items-center
            gap-2
          '
          >
            <MapPin size={24} />
            <span>Delivery Address</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='py-3 cursor-pointer'
          onClick={() => router.push('/orders')}
        >
          <ClipboardList className='size-4' />
          My Orders
        </DropdownMenuItem>

        <DropdownMenuItem
          className='py-3 cursor-pointer'
          variant='destructive'
          onClick={handleLogout}
        >
          <LogOut className='size-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
