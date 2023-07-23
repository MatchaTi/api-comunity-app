import { Request, Response } from 'express';
import post from '../../model/post';
import { errors } from '../../utils/service/error';

export const likeUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await post.updateOne({ _id: req.params.post_id }, { $inc: { likes: 1 } });
    res.status(200).json({ message: 'berhasil menyukai post' });
  } catch (error) {
    errors(res, 400, error);
  }
};
export const unLikeUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await post.updateOne({ _id: req.params.post_id }, { $inc: { likes: -1 } });
    res.status(200).json({ message: 'berhasil membatalkan menyukai post' });
  } catch (error) {
    errors(res, 400, error);
  }
};
