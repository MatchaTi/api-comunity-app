import { Router } from 'express';
import {
  getIndexUsers,
  followingUser,
  unFollowUser,
  addUserInterest,
  likeUser,
  unLikeUser,
  savePostByUser,
  deleteSavePostByUser
} from '../controller/users';
import { interestValidator } from '../validator/userValidator';

const router: Router = Router();

router.get('/:username/:start/:limit', getIndexUsers);
router.patch('/follow/:user_id/:user_follow_id', followingUser);
router.patch('/unfollow/:user_id/:user_follow_id', unFollowUser);
router.patch('/interest/:user_id', interestValidator(), addUserInterest);
router.patch('/likes/:post_id', likeUser);
router.patch('/unlikes/:post_id', unLikeUser);
router.patch('/savepost/:user_id/:post_id', savePostByUser);
router.patch('/deletesavepost/:user_id/:post_id', deleteSavePostByUser);

export default router;
