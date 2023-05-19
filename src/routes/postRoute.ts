import { Router } from 'express';
import {
  createPost,
  deletePost,
  getPostByCategories,
  getPostByUsers,
  updatePost
} from '../controller/postController';
import {
  createPostValidator,
  updatePostValidator
} from '../validator/postValidator';

const router = Router();

router.get('/index/:category/:start/:limit', getPostByCategories);
router.get('/index/:username/:start/:limit', getPostByUsers);
router.post('/create/:user_id', createPostValidator(), createPost);
router.put('/update/:post_id', updatePostValidator(), updatePost);
router.delete('/delete/:post_id', deletePost);

export default router;
