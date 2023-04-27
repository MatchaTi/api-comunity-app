import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from '../utils/interface';

export const hasrole = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
};
