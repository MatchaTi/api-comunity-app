import { Router } from 'express';
import {
  forgotPassword,
  login,
  register,
  sendForgotPassword,
  sendTokenRegister,
  verifyTokenRegister
} from '../controller/auth/authController';
import {
  forgotValidator,
  loginValidator,
  registerValidator,
  sendValidator,
  verifyValidator
} from '../validator/userValidator';

const router: Router = Router();

router.post('/register', registerValidator(), register);
router.post('/otp-verify', verifyValidator(), verifyTokenRegister);
router.post('/send-otp', sendValidator(), sendTokenRegister);
router.post('/login', loginValidator(), login);
router.post('/send-forgot-password', sendValidator(), sendForgotPassword);
router.put('/forgot-password', forgotValidator(), forgotPassword);

export default router;
