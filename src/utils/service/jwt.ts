import jwt from 'jsonwebtoken';
import { IUser } from '../interface';

export const createToken = ({ _id, username, roles }: IUser) => {
  const option = {
    expiresIn: '30d'
  };

  return jwt.sign(
    { _id, username, roles },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    option
  );
};

export const createForgotToken = (_id: string) => {
  const option = {
    expiresIn: '15m'
  };

  return jwt.sign({ _id }, process.env.JWT_ACCESS_TOKEN_SECRET, option);
};
