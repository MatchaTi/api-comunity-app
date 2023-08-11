import user from '../../model/user';
import { Request, Response } from 'express';
import { errors } from '../../utils/service/error';

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
    errors(res, 400, error);
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
    errors(res, 400, error);
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
    errors(res, 400, error);
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
    errors(res, 400, error);
  }
};

export const getUserProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { _id } = res.locals.jwtPayload;
  try {
    const data = await user.find({ _id }, '-credential');

    res.status(200).json({ data });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const getUserProfileByUsername = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username } = req.params;
  try {
    const data = await user.find({ username }, '-credential');

    res.status(200).json({ data });
  } catch (error) {
    errors(res, 400, error);
  }
};
