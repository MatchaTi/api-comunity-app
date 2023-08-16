import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { errors } from '../utils/service/error';

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    errors(res, 401, 'UnAuthorization : Authorization Header is denied');
    return;
  }

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Bearer' || !token) {
    errors(res, 401, 'UnAuthorization : Authorization Bearer Token is denied');
    return;
  }

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, token) => {
    if (err) {
      errors(res, 401, 'UnAuthorization : Token Is Not verify');
      return;
    }

    res.locals.jwtPayload = token;

    res.cookie('token', token, { httpOnly: true });
    next();
  });
};
