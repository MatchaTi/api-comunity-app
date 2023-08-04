import mongoose from 'mongoose';
import { logger } from '../config/winston';

export const dbConnect = (): void => {
  mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection;
  db.on('error', (error) => {
    logger.log({
      level: 'error',
      message: error
    });
  });
  db.once('open', () => {
    logger.log({
      level: 'info',
      message: '⚡️[mongoDB]: Database connected'
    });
  });
};
