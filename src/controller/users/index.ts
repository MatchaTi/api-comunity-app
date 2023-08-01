import {
  getIndexUsers,
  getSavedPostUsers,
  getUserfollowing,
  getUserfollowers
} from './getController';
import { addUserInterest } from './interestController';
import { followingUser, unFollowUser } from './followController';
import { likeUser, unLikeUser } from './likeController';
import { savePostByUser, deleteSavePostByUser } from './savedPostController';
import {
  markAsAllReadController,
  markAsReadController
} from './notificationController';

export {
  getIndexUsers,
  addUserInterest,
  followingUser,
  unFollowUser,
  likeUser,
  unLikeUser,
  savePostByUser,
  deleteSavePostByUser,
  getSavedPostUsers,
  getUserfollowers,
  getUserfollowing,
  markAsAllReadController,
  markAsReadController
};
