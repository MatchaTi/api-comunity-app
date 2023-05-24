import { Router } from 'express';
import { getIndexUsers } from '../controller/userController';

const router: Router = Router();

router.get('/:username', getIndexUsers);

export default router;
