import { Response, NextFunction } from 'express';

export const hasrole = (res: Response, next: NextFunction) => {
  const roles = res.locals.jwtPayload.roles;

  if (roles !== 'admin')
    return res.status(403).json({ message: 'access denied' });

  next();
};
