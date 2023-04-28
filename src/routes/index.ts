import authRouter from './authRoute';
import postRouter from './post';
import { Router } from 'express';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/post', postRouter);

export default rootRouter;
