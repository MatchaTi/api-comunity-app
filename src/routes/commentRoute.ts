import { Router } from 'express';
import {
  createComment,
  removeComment,
  updateComment
} from '../controller/comment/commentController';
import {
  createCommentValidator,
  updateCommentValidator
} from '../validator/commentValidator';

const router: Router = Router();

router.post('/create', createCommentValidator(), createComment);
router.patch('/update', updateCommentValidator(), updateComment);
router.delete('/delete', removeComment);

export default router;
