import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../utils/interface';

const userSchema = new Schema<IUser>({
  _id: { type: String, default: uuidv4 },
  username: { type: String, unique: true },
  credential: {
    email: { type: String, unique: true },
    password: { type: String }
  },
  avatar: { type: String }
});

export default model<IUser>('user', userSchema);
