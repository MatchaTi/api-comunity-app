import { Schema } from 'mongoose';

export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  job: string;
  avatar: string;
  badge: Array<IBadge>;
  isActive: boolean;
  roles: 'user' | 'admin';
  following: Array<string>;
  followers: Array<string>;
  saved: Array<string>;
}

export interface IOtp {
  _id: string;
  otp_number: number;
  email: string;
  created_at: string;
}

export interface IPost {
  _id: string;
  user_id: string;
  users: string;
  title: string;
  category: string;
  description: string;
  code: {
    syntax: string;
    path_file: string;
  };
  image: string;
  comment?: Array<Icomment>;
  isEdited: boolean;
  likes: number;
  dislikes: number;
  linkSourceCode: string;
  linkLiveDemo: string;
}

export interface Icomment {
  _id: string;
  user_id: string;
  users: Schema.Types.ObjectId;
  text: string;
  likes: number;
  dislikes: number;
  isEdited: boolean;
  reply?: Array<Icomment>;
}

export interface IBadge {
  name: string;
  description: string;
  type: string;
  created_at: string;
}
