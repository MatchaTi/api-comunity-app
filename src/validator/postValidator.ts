import { body } from 'express-validator';

export const createPostValidator = () => [
  body('title')
    .isString()
    .isLength({ max: 80 })
    .withMessage('Jumlah maximal 80 karakter'),
  body('category').isString(),
  body('description')
    .isString()
    .isLength({ max: 4000 })
    .withMessage('Jumlah maximal 4000 karakter')
    .optional(),
  body('code').isString().optional(),
  body('linkSourceCode').isString().optional(),
  body('linkLiveDemo').isString().optional()
];

export const updatePostValidator = () => [
  body('title')
    .isString()
    .isLength({ max: 80 })
    .withMessage('Jumlah maximal 80 karakter')
    .optional(),
  body('category').isString().optional(),
  body('description')
    .isString()
    .isLength({ max: 4000 })
    .withMessage('Jumlah maximal 4000 karakter')
    .optional(),
  body('code').isString().optional(),
  body('linkSourceCode').isString().optional(),
  body('linkLiveDemo').isString().optional()
];
