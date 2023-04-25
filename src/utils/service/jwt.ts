import jwt from 'jsonwebtoken';
import { IUser } from '../interface';

export const createToken = ({ username, _id }: IUser) => {
  const option = {
    expiresIn: '3d'
  };

  return jwt.sign({ username, _id }, process.env.JWT_SECRET, option);
};
