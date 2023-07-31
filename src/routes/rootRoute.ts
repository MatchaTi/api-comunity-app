import multer from 'multer';
import authRouter from './authRoute';
import postRouter from './postRoute';
import userRouter from './userRoute';
import commentRouter from './commentRoute';
import { Router } from 'express';
import { fileFilter, fileStorage } from '../config/multer';
import { jwtMiddleware } from '../middleware/jwtMiddleware';
import { multerMiddleware } from '../middleware/multerMiddleware';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/post', [multerMiddleware], postRouter);
rootRouter.use('/user', userRouter);
rootRouter.use('/comment', commentRouter);

export default rootRouter;
