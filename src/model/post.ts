import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IPost, Icomment } from '../utils/interface';

const postSchema = new Schema<IPost>(
  {
    _id: { type: String, default: uuidv4 },
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    code: { type: String },
    image: { type: String },
    comment: { type: Array<Icomment> },
    isEdited: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

export default model<IPost>('post', postSchema);
