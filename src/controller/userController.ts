import user from '../model/user';

import { Request, Response } from 'express';

export const getIndex = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const data = await user.find({ username }).sort({ _id: -1 }).limit(15);

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
