import { body } from 'express-validator';
import user from '../model/user';

export const registerValidator = () => [
  body('email')
    .isEmail()
    .custom(async (value) => {
      const existingUser = await user.findOne({ email: value });
      if (existingUser) {
        throw new Error('E-mail already in use');
      }
      return true;
    }),
  body('password').isString().isLength({ min: 6 }),
  body('fullname').isString().isLength({ min: 4, max: 28 })
];

export const verifyValidator = () => [
  body('email').isEmail(),
  body('otp_number').isNumeric().isLength({ min: 6, max: 6 })
];

export const sendTokenValidator = () => [body('email').isEmail()];

export const loginValidator = () => [
  body('email').isEmail(),
  body('password').isString().isLength({ min: 6 })
];
