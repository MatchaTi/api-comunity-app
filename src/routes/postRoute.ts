import { Router } from 'express';
import {
  createPost,
  deletePost,
  updatePost
} from '../controller/postController';
import {
  createPostValidator,
  updatePostValidator
} from '../validator/postValidator';

const router = Router();

router.post('/create/:user_id', createPostValidator(), createPost);
router.put('/update/:post_id', updatePostValidator(), updatePost);
router.delete('/delete/:post_id', deletePost);

export default router;
