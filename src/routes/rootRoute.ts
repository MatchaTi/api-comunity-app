import multer from 'multer';
import authRouter from './authRoute';
import postRouter from './postRoute';
import userRouter from './userRoute';
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
rootRouter.use('/user', userRouter);

export default rootRouter;
