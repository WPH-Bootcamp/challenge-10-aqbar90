import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { ProfileInfoRow } from './ProfileInfoRow';

import { useProfile } from '../hooks/useProfile';

import defaulAvatar from '@/assets/images/navbar/default-avatar.svg';

import { useUpdateProfileModal } from '../hooks/useUpdateProfileModal';

export function ProfileCard() {
  const { data, isLoading } = useProfile();

  const profile = data?.data;

  const { open } = useUpdateProfileModal();

  if (isLoading) {
    return (
      <div
        className='
        rounded-2xl
        bg-white
        p-5
        shadow-card
      '
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      className='
        rounded-2xl
        bg-white
        p-5
        shadow-card
      '
    >
      <div
        className='
          flex
          flex-col
          gap-6
        '
      >
        <Image
          src={profile?.avatar || defaulAvatar}
          alt={profile?.name ?? 'Profile'}
          width={64}
          height={64}
          className='rounded-full object-cover'
        />

        <div
          className='
            flex
            flex-col
            gap-3
          '
        >
          <ProfileInfoRow label='Name' value={profile?.name ?? '-'} />

          <ProfileInfoRow label='Email' value={profile?.email ?? '-'} />

          <ProfileInfoRow
            label='Nomor Handphone'
            value={profile?.phone ?? '-'}
          />
        </div>

        <Button
          onClick={open}
          className='
            h-11
            rounded-full
          '
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
}
