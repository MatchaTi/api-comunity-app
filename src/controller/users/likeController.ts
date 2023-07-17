import { Request, Response } from 'express';
import post from '../../model/post';

export const likeUser = async (req: Request, res: Response): Promise<void> => {
  try {
    await post.updateOne({ _id: req.params.post_id }, { $inc: { likes: 1 } });
    res.status(200).json({ message: 'berhasil menyukai post' });
  } catch (error) {
    res.status(400).json({ message: error });
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
    res.status(400).json({ message: error });
  }
};
