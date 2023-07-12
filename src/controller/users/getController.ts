import user from '../../model/user';
import { Request, Response } from 'express';

export const getIndexUsers = async (req: Request, res: Response) => {
  const { username, start, limit } = req.params;

  try {
    const data = await user
      .find(
        { username: { $regex: username, $options: 'i' } },
        'username avatar'
      )
      .skip(parseInt(start))
      .limit(parseInt(limit));

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
