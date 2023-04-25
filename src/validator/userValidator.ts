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
