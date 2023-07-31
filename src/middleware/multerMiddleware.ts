import { Request, Response, NextFunction } from 'express';
import { MulterError } from 'multer';
import { multerConfig } from '../config/multer';
import { errors } from '../utils/service/error';

export const multerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  multerConfig(req, res, (err: any): void => {
    if (err instanceof MulterError || err) {
      errors(res, 400, 'Gagal Upload Gambar : ' + err.message);
      return;
    }
    next();
  });
};
