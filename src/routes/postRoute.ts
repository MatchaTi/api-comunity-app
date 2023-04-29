import { Router } from 'express';
import { createPost } from '../controller/postController';
import { createPostValidator } from '../validator/postValidator';

const router = Router();

router.post('/create/:user_id', createPostValidator(), createPost);

export default router;
