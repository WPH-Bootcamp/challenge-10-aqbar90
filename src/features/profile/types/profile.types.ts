export type Profile = {
  id: number;

  name: string;

  email: string;

  phone: string;

  avatar: string;

  latitude: number;

  longitude: number;

  createdAt: string;
};

export type ProfileResponse = {
  success: boolean;

  message: string;

  data: Profile;
};

export type GetProfileResponse = {
  success: boolean;

  message: string;

  data: Profile;
};

export type UpdateProfilePayload = {
  name?: string;

  email?: string;

  phone?: string;

  avatar?: File | null;
};

export type UpdateProfileResponse = {
  success: boolean;

  message: string;

  data: Profile;
};
