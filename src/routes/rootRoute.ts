import authRouter from './authRoute';
import postRouter from './postRoute';
import userRouter from './userRoute';
import commentRouter from './commentRoute';
import { Router } from 'express';
import { jwtMiddleware } from '../middleware/jwtMiddleware';
import { multerMiddleware } from '../middleware/multerMiddleware';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/post', multerMiddleware, postRouter);
rootRouter.use('/user', jwtMiddleware, userRouter);
rootRouter.use('/comment', jwtMiddleware, commentRouter);

export default rootRouter;
