import { Request, Response } from 'express';
import post from '../../model/post';
import { errors } from '../../utils/service/error';
import user from '../../model/user';

export const likeUser = async (req: Request, res: Response): Promise<void> => {
  const { _id, username } = res.locals.jwtPayload;
  const { post_id, user_id } = req.params;
  try {
    const data = {
      user_id: _id,
      post_id,
      description: `${username} Menyukai Postingan Anda`,
      created_at: new Date()
    };
    await post.updateOne({ _id: post_id }, { $inc: { likes: 1 } });
    await user.findOneAndUpdate(
      { _id: user_id },
      {
        $push: {
          notification: data
        }
      }
    );

    res.status(200).json({ message: 'berhasil menyukai post', data });
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
