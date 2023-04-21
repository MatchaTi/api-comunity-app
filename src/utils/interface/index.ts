export interface IUser {
  _id: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  avatar?: string;
}
