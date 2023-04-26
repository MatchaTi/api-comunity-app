export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  avatar?: string;
  isActive: boolean;
  roles: 'user' | 'admin';
}

export interface IOtp {
  _id: string;
  otp_number: number;
  email: string;
}
