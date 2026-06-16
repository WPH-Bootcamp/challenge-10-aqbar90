'use client';

import { Input } from '@/components/ui/input';
import { useState } from 'react';

interface UpdateProfileFormProps {
  form: {
    name: string;
    email: string;
    phone: string;
  };

  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
    }>
  >;

  onAvatarChange: (file: File | null) => void;
}

export default function UpdateProfileForm({
  form,
  setForm,
  onAvatarChange,
}: UpdateProfileFormProps) {
  const [avatarName, setAvatarName] = useState('');

  return (
    <div
      className='
        flex
        flex-col
        gap-4
      '
    >
      <Input
        value={form.name}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        placeholder='Name'
      />

      <Input
        type='email'
        value={form.email}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
        placeholder='Email'
      />

      <Input
        value={form.phone}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            phone: e.target.value,
          }))
        }
        placeholder='Phone Number'
      />

      <input
        type='file'
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;

          onAvatarChange(file);

          setAvatarName(file?.name ?? '');
        }}
        accept='image/*'
        className='hidden'
        id='avatar'
      />

      <label
        htmlFor='avatar'
        className='
        flex
        h-12
        cursor-pointer
        items-center
        rounded-xl
        border
        px-4
      '
      >
        {avatarName || 'Upload Avatar'}
      </label>
    </div>
  );
}
