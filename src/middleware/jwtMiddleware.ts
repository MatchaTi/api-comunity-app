import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ Message: 'UnAuthorization' });
    return;
  }

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Bearer' || !token) {
    res.status(401).json({ Message: 'UnAuthorization' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, token) => {
    if (err) {
      res.status(403).json({ Message: 'UnAuthorization' });
      return;
    }

    res.locals.jwtPayload = token;

    next();
  });
};
