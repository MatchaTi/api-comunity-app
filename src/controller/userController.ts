import user from '../model/user';

import { Request, Response } from 'express';

export const getIndexUsers = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const data = await user
      .find({ username: { $regex: username, $options: 'i' } }, 'username')
      .limit(15);

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
