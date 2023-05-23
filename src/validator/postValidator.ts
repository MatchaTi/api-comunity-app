import { body } from 'express-validator';

export const createPostValidator = () => [
  body('title').isString().isLength({ max: 80 }),
  body('category').isString(),
  body('description').isString().isLength({ max: 4000 }).optional(),
  body('code').isString().optional(),
  body('link_repo').isString().optional(),
  body('link_demo').isString().optional()
];

export const updatePostValidator = () => [
  body('title').isString().isLength({ max: 80 }).optional(),
  body('category').isString().optional(),
  body('description').isString().optional(),
  body('code').isString().optional()
];
