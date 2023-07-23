import { Response, NextFunction } from 'express';
import { errors } from '../utils/service/error';

export const hasrole = (res: Response, next: NextFunction): void => {
  const roles = res.locals.jwtPayload.roles;

  if (roles !== 'admin') {
    errors(res, 401, 'access denied');
    return;
  }

  next();
};
