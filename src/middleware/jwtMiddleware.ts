import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ Message: 'UnAuthorization' });
  }

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Bearer' || !token) {
    return res.status(401).json({ Message: 'UnAuthorization' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, token) => {
    if (err) {
      return res.status(403).json({ Message: 'UnAuthorization' });
    }

    res.locals.jwtPayload = token;

    next();
  });
};
