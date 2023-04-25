export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  created_at: number;
  avatar?: string;
}
