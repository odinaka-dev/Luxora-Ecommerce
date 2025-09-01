export interface signupType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profile: profileType;
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
