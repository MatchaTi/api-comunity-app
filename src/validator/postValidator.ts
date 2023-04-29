import { body } from 'express-validator';

export const createPostValidator = () => [
  body('title').isString().isLength({ max: 64 }),
  body('category').isString(),
  body('description').isString(),
  body('code').isString().optional()
];

export const updatePostValidator = () => [
  body('title').isString().isLength({ max: 64 }).optional(),
  body('category').isString().optional(),
  body('description').isString().optional(),
  body('code').isString().optional()
];
