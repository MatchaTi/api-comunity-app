import { jwtMiddleware } from '../middleware/jwtMiddleware';
import authRouter from './authRoute';
import { Router } from 'express';

const rootRouter = Router();

rootRouter.use('/auth', jwtMiddleware, authRouter);

export default rootRouter;
