import { body } from 'express-validator';

export const createPostValidator = () => [
  body('title')
    .isString()
    .withMessage('Title harus String')
    .isLength({ max: 80 })
    .withMessage('Panjang litle lebih dari 80'),
  body('category').isString().withMessage('Category harus string'),
  body('description')
    .isString()
    .withMessage('Description harus string')
    .isLength({ max: 4000 })
    .withMessage('Panjang kata description lebih dari 4000')
    .optional(),
  body('code').isString().optional(),
  body('linkSourceCode').isString().optional(),
  body('linkLiveDemo').isString().optional()
];

export const updatePostValidator = () => [
  body('title').isString().isLength({ max: 80 }).optional(),
  body('category').isString().optional(),
  body('description').isString().optional(),
  body('code').isString().optional()
];
