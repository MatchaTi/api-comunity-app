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
  getUserfollowing
} from '../controller/users';
import { arrayValidator } from '../validator/userValidator';
import { getUserProfile } from '../controller/users/getController';

const router: Router = Router();

router.get('/:username/:start/:limit', getIndexUsers);
router.get('/savedpost/:user_id/:start/:limit', getSavedPostUsers);
router.get('/following', arrayValidator(), getUserfollowing);
router.get('/followers', arrayValidator(), getUserfollowing);
router.get('/profile', getUserProfile);
router.patch('/follow/:user_id/:user_follow_id', followingUser);
router.patch('/unfollow/:user_id/:user_follow_id', unFollowUser);
router.patch('/interest/:user_id', arrayValidator(), addUserInterest);
router.patch('/likes/:post_id', likeUser);
router.patch('/unlikes/:post_id', unLikeUser);
router.patch('/savepost/:user_id/:post_id', savePostByUser);
router.patch('/deletesavepost/:user_id/:post_id', deleteSavePostByUser);

export default router;
