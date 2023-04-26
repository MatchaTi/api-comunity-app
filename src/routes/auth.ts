import express, { Router } from 'express';
import { register, verifyTokenRegister } from '../controller/authController';
import { registerValidator, verifyValidator } from '../validator/userValidator';

const router: Router = express.Router();

router.post('/register', registerValidator(), register);
router.post('/verify', verifyValidator(), verifyTokenRegister);

export default router;
