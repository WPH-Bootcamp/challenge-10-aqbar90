import { api } from '@/lib/api/axios';

import type { ProfileResponse } from '../types/profile.types';

import type {
  GetProfileResponse,
  UpdateProfilePayload,
  UpdateProfileResponse,
} from '../types/profile.types';

export async function getProfile() {
  const response = await api.get<ProfileResponse>('/auth/profile');

  return response.data;
}

export async function updateProfile(payload: UpdateProfilePayload) {
  const formData = new FormData();

  if (payload.name) {
    formData.append('name', payload.name);
  }

  if (payload.email) {
    formData.append('email', payload.email);
  }

  if (payload.phone) {
    formData.append('phone', payload.phone);
  }

  if (payload.avatar) {
    formData.append('avatar', payload.avatar);
  }

  const response = await api.put<UpdateProfileResponse>(
    '/auth/profile',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
}
