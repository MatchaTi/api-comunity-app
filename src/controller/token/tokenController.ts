import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { errors } from '../../utils/service/error';
import { createAccessToken } from '../../utils/service/jwt';

export const refreshToken = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (req.cookies.refreshToken) {
    const refreshToken = req.cookies.refreshToken;

    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_SECRET,
      (error: any) => {
        if (error) {
          errors(res, 403, 'UnAuthorized');
          return;
        }
        const accessToken = createAccessToken(req.body);
        return res.status(200).json({ accessToken });
      }
    );
  }
  return errors(res, 403, 'UnAuthorized');
};
