import user from '../model/user';
import { Request, Response } from 'express';
// import bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response) => {
  //   const salt = await bcrypt.genSalt(10);
  const data = new user(req.body);
  try {
    res.status(400).json(data);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};
