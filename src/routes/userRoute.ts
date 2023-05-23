import { Router } from 'express';
import { getIndex } from '../controller/postController';

const router: Router = Router();

router.get('/:username', getIndex);

export default router;
