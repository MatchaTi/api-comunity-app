import user from '../../model/user';
import { Request, Response } from 'express';

export const getIndexUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
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

export const getSavedPostUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id, start, limit } = req.params;

  try {
    const data = await user
      .findOne({ _id: user_id }, 'saved')
      .populate('saved')
      .skip(parseInt(start))
      .limit(parseInt(limit));

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getUserfollowing = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await user.find({ _id: { $in: req.body.following } });

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getUserfollowers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await user.find({ _id: { $in: req.body.followers } });

    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
