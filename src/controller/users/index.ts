import { getIndexUsers, getSavedPostUsers } from './getController';
import { addUserInterest } from './interestController';
import { followingUser, unFollowUser } from './followController';
import { likeUser, unLikeUser } from './likeController';
import { savePostByUser, deleteSavePostByUser } from './savedPostController';

export {
  getIndexUsers,
  addUserInterest,
  followingUser,
  unFollowUser,
  likeUser,
  unLikeUser,
  savePostByUser,
  deleteSavePostByUser,
  getSavedPostUsers
};
