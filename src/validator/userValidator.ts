import { body } from 'express-validator';
import user from '../model/user';

export const registerValidator = () => [
  body('email')
    .isEmail()
    .withMessage('Type email tidak valid')
    .custom(async (value) => {
      const existingUser = await user.findOne({ email: value });
      if (existingUser) {
        throw new Error('A user already exists with this e-mail address');
      }
    }),
  body('password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Password : Jumlah minimal 6 karakter'),
  body('fullname')
    .isString()
    .isLength({ min: 4, max: 28 })
    .withMessage('Fullname : Jumlah maximal 28 dan minimal 4 karakter')
];

export const verifyValidator = () => [
  body('email').isEmail().withMessage('Email : Type email tidak valid'),
  body('otp_number')
    .isNumeric()
    .withMessage('otp number : karakter bukan numeric')
    .isLength({ min: 6, max: 6 })
    .withMessage('jumlah karakter tidak valid')
];

export const sendValidator = () => [
  body('email').isEmail().withMessage('Jumlah minimal 6 karakter')
];

export const loginValidator = () => [
  body('email').isEmail().withMessage('Jumlah minimal 6 karakter'),
  body('password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Jumlah minimal 6 karakter')
];

export const forgotValidator = () => [
  body('_id').isString(),
  body('new_password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('Jumlah minimal 6 karakter')
];
