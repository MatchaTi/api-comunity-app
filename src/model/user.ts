import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from '../utils/interface';

const userSchema = new Schema<IUser>(
  {
    _id: { type: String, default: uuidv4 },
    username: { type: String, unique: true },
    fullname: { type: String },
    credential: {
      email: { type: String, unique: true },
      password: { type: String }
    },
    roles: { type: String, default: 'user' },
    image: { type: String },
    isActive: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

export default model<IUser>('user', userSchema);
