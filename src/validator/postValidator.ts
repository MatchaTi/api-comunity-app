import { body } from 'express-validator';

export const createPostValidator = () => [
  body('title').isString().isLength({ max: 64 }),
  body('category').isString(),
  body('description').isString(),
  body('code').isString()
];
