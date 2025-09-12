export interface SignUpType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profile: profileType | null;
}

interface profileType {
  gender: string;
  bio: string;
  phone: string;
  dateOfBirth: string;
}

export interface loginType {
  email: string;
  password: string;
}
