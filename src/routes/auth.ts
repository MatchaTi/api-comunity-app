import express, { Router } from 'express';
import {
  login,
  register,
  sendTokenRegister,
  verifyTokenRegister
} from '../controller/authController';
import {
  loginValidator,
  registerValidator,
  sendTokenValidator,
  verifyValidator
} from '../validator/userValidator';

const router: Router = express.Router();

router.post('/register', registerValidator(), register);
router.post('/otp-verify', verifyValidator(), verifyTokenRegister);
router.post('/send-otp', sendTokenValidator(), sendTokenRegister);
router.post('/login', loginValidator(), login);

export default router;
