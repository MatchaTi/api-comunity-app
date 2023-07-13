import mongoose from 'mongoose';

export const dbConnect = (): void => {
  mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection;
  db.on('error', (error) => console.log(error));
  db.once('open', () => console.log('Database Connected....'));
};
