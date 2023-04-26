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

export interface IToken {
  _id: string;
  token_number: number;
  email: string;
}
