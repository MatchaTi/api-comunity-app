import authRouter from './authRoute';
import postRouter from './postRoute';
import userRouter from './userRoute';
import commentRouter from './commentRoute';
import { Router } from 'express';
import { jwtMiddleware } from '../middleware/jwtMiddleware';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/post', postRouter);
rootRouter.use('/user', jwtMiddleware, userRouter);
rootRouter.use('/comment', jwtMiddleware, commentRouter);

export default rootRouter;
