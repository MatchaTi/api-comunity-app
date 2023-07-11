import { Router } from 'express';
import { getIndexUsers } from '../controller/users';

const router: Router = Router();

router.get('/:username/:start/:limit', getIndexUsers);

export default router;
