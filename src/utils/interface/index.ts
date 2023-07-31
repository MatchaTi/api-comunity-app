export interface IUser {
  _id: string;
  socket_id: string;
  fullname: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  bio: string;
  job: string;
  avatar: string;
  badge: Array<IBadge>;
  isActive: boolean;
  roles: 'user' | 'admin';
  following: Array<string>;
  followers: Array<string>;
  saved: Array<string>;
  interest: Array<string>;
  notification: Array<INotification>;
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
  code: ICode;
  image: string;
  isEdited: boolean;
  likes: number;
  linkSourceCode: string;
  linkLiveDemo: string;
  comment: Array<IComment>;
  createdAt: string;
}

export interface IComment {
  _id: string;
  post_id: string;
  user_id: string;
  description: string;
  code: ICode;
  isEdited: boolean;
  created_at: number;
}

export interface IBadge {
  name: string;
  description: string;
  type: string;
  created_at: number;
}

export interface INotification {
  user_id: string;
  post_id?: string;
  description: string;
  created_at: number;
}

export interface ICode {
  syntax: string;
  pathFile: string;
}
