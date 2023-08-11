import { Router } from 'express';
import {
  getIndexUsers,
  followingUser,
  unFollowUser,
  addUserInterest,
  likeUser,
  unLikeUser,
  savePostByUser,
  deleteSavePostByUser,
  getSavedPostUsers,
  getUserfollowing,
  markAsAllReadController,
  markAsReadController
} from '../controller/users';
import {
  arrayValidator,
  notificationValidator
} from '../validator/userValidator';
import {
  getUserProfile,
  getUserProfileByUsername
} from '../controller/users/getController';

const router: Router = Router();

router.get('/:username/:start/:limit', getIndexUsers);
router.get('/savedpost/:user_id/:start/:limit', getSavedPostUsers);
router.get('/following', arrayValidator('following'), getUserfollowing);
router.get('/followers', arrayValidator('followers'), getUserfollowing);
router.get('/profile', getUserProfile);
router.get('/profile/:username', getUserProfileByUsername);
router.patch('/follow/:user_id/:user_follow_id', followingUser);
router.patch('/unfollow/:user_id/:user_follow_id', unFollowUser);
router.patch('/interest/:user_id', arrayValidator('interest'), addUserInterest);
router.patch('/likes/:post_id', likeUser);
router.patch('/unlikes/:post_id', unLikeUser);
router.patch('/savepost/:user_id/:post_id', savePostByUser);
router.patch('/deletesavepost/:user_id/:post_id', deleteSavePostByUser);
router.patch(
  '/notification/read/all/:user_id',
  arrayValidator('notification_id'),
  markAsAllReadController
);
router.patch(
  '/notification/read/person/:user_id',
  notificationValidator(),
  markAsReadController
);

export default router;
