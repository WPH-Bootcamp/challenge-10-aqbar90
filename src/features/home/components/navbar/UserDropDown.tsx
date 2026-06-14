'use client';

import { useRouter } from 'next/navigation';
import { MapPin, ClipboardList, LogOut } from 'lucide-react';

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
            src={user?.avatar || defaultAvatar}
            alt={user?.name ?? 'User'}
            width={40}
            height={40}
            className='rounded-full object-cover'
          />

          <span className='truncate text-sm font-semibold'>{user?.name}</span>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='py-3'>
          <MapPin className='size-4' />
          Delivery Address
        </DropdownMenuItem>

        <DropdownMenuItem className='py-3'>
          <ClipboardList className='size-4' />
          My Orders
        </DropdownMenuItem>

        <DropdownMenuItem
          className='py-3'
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
