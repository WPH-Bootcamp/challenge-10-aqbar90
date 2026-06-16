'use client';

import { useEffect } from 'react';
import { useState } from 'react';

import { X } from 'lucide-react';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import UpdateProfileForm from './UpdateProfileForm';

import { useProfile } from '../hooks/useProfile';

import { useUpdateProfile } from '../hooks/useUpdateProfile';

import { useUpdateProfileModal } from '../hooks/useUpdateProfileModal';

import { AxiosError } from 'axios';
import { toast } from 'sonner';

export default function UpdateProfileModal() {
  const { isOpen, close } = useUpdateProfileModal();

  const { data } = useProfile();

  const { mutate, isPending } = useUpdateProfile();

  const [avatar, setAvatar] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (!isOpen || !data?.data) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm({
      name: data.data.name,
      email: data.data.email,
      phone: data.data.phone,
    });
  }, [isOpen, data]);

  const handleSubmit = () => {
    mutate(
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        avatar,
      },
      {
        onSuccess: () => {
          close();
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            toast.error(
              error.response?.data?.message ?? 'Update profile failed'
            );

            return;
          }

          toast.error('Name/Email/Phone have been used');
        },
      }
    );
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          close();
        }
      }}
    >
      <DialogContent
        className='
          w-full
          max-w-90!
          rounded-2xl
          p-6
        '
      >
        <div
          className='
            flex
            items-center
            justify-between
          '
        >
          <DialogTitle
            className='
              text-display-xs
              font-extrabold
            '
          >
            Update Profile
          </DialogTitle>

          <button type='button' onClick={close}>
            <X className='h-6 w-6' />
          </button>
        </div>

        <UpdateProfileForm
          form={form}
          setForm={setForm}
          onAvatarChange={setAvatar}
        />

        <Button
          onClick={handleSubmit}
          disabled={isPending}
          className='
            h-12
            rounded-full
          '
        >
          {isPending ? 'Updating...' : 'Update Profile'}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
