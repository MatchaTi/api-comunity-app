import jwt from 'jsonwebtoken';
import { IUser } from '../interface';

export const createToken = ({ username, roles }: IUser) => {
  const option = {
    expiresIn: '3d'
  };

  return jwt.sign({ username, roles }, process.env.JWT_SECRET, option);
};

export const createForgotToken = (_id: string) => {
  const option = {
    expiresIn: '15m'
  };

  return jwt.sign({ _id }, process.env.JWT_SECRET, option);
};
