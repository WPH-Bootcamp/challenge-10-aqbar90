'use client';

import { useAuthStore } from '@/stores/auth-store';
import Image from 'next/image';

import defaultAvatar from '@/assets/images/navbar/default-avatar.svg';

import { MapPin, FileText, LogOut } from 'lucide-react';

export function OrdersSidebar() {
  const user = useAuthStore((state) => state.user);

  return (
    <aside
      className='
        hidden
        md:flex
        w-60
        shrink-0
        flex-col
        rounded-2xl
        bg-white
        p-5
        shadow-card
      '
    >
      <div
        className='
    flex
    items-center
    gap-3
    pb-5
    border-b
    border-border
  '
      >
        <Image
          src={user?.avatar || defaultAvatar}
          alt={user?.name ?? 'User'}
          width={56}
          height={56}
          className='
      rounded-full
      object-cover
    '
        />

        <span
          className='
      text-lg
      leading-lg
      font-bold
      tracking-tight
    '
        >
          {user?.name ?? 'John Doe'}
        </span>
      </div>
      <div
        className='
    mt-6
    flex
    flex-col
    gap-6
  '
      >
        <button
          className='
      flex
      items-center
      gap-2
      text-md
      leading-md
      font-medium
      text-foreground
    '
        >
          <MapPin size={24} />

          <span>Delivery Address</span>
        </button>

        <button
          className='
      flex
      items-center
      gap-2
      text-md
      leading-md
      font-medium
      text-primary
      transition-colors
      hover:text-primary
    '
        >
          <FileText size={24} />

          <span>My Orders</span>
        </button>

        <button
          className='
      flex
      items-center
      gap-2
      text-md
      leading-md
      font-medium
      text-foreground
      transition-colors
      hover:text-primary
    '
        >
          <LogOut size={24} />

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
