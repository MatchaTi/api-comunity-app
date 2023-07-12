import { Router } from 'express';
import {
  getIndexUsers,
  followingUser,
  unFollowUser,
  addUserInterest
} from '../controller/users';
import { interestValidator } from '../validator/userValidator';

const router: Router = Router();

router.get('/:username/:start/:limit', getIndexUsers);
router.patch('/follow/:user_id/:user_follow_id', followingUser);
router.patch('/unfollow/:user_id/:user_follow_id', unFollowUser);
router.patch('/interest/:user_id', interestValidator(), addUserInterest);

export default router;
