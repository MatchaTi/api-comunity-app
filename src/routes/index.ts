import multer from 'multer';
import authRouter from './authRoute';
import postRouter from './postRoute';
import { Router } from 'express';
import { fileFilter, fileStorage } from '../config/multer';
import { jwtMiddleware } from '../middleware/jwtMiddleware';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use(
  '/post',
  [
    jwtMiddleware,
    multer({ storage: fileStorage, fileFilter: fileFilter }).single('image')
  ],
  postRouter
);

export default rootRouter;
