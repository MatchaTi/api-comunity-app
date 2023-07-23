import { Response } from 'express';

export const errors = (res: Response, status: number, errors: unknown) => {
  res.status(status).json({ error: [{ msg: errors }] });
};
