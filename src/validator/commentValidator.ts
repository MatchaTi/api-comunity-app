import { body } from 'express-validator';

export const createCommentValidator = () => [
  body(['user_id', 'post_id']).isString(),
  body('description').isString().isLength({ max: 1024 })
];

export const updateCommentValidator = () => [
  body(['comment_id', 'post_id']).isString(),
  body('description').isString().isLength({ max: 1024 })
];
