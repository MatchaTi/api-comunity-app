import { Response, NextFunction } from 'express';

export const hasrole = (res: Response, next: NextFunction): void => {
  const roles = res.locals.jwtPayload.roles;

  if (roles !== 'admin') {
    res.status(403).json({ message: 'access denied' });
    return;
  }

  next();
};
