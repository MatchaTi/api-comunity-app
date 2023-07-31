import { Request, Response } from 'express';
import post from '../../model/post';
import { errors } from '../../utils/service/error';

export const createComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await post.findByIdAndUpdate(req.body.post_id, {
      $push: {
        comment: {
          ...req.body,
          created_at: new Date()
        }
      }
    });
    if (data == null) throw 'Gagal menambahkan komentar';
    res.status(200).json({ message: 'Berhasil menambahkan komentar' });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const updateComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { post_id, comment_id, description } = req.body;
  try {
    const data = await post.updateOne(
      { _id: post_id, 'comment._id': comment_id },
      {
        $set: {
          'comment.$.description': description,
          'comment.$.isEdited': true
        }
      }
    );
    if (data == null) throw 'Gagal update komentar';
    res.status(200).json({ message: 'Berhasil mengupdate komentar' });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const removeComment = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { post_id, comment_id } = req.body;
  try {
    const data = await post.updateOne(
      {
        _id: post_id
      },
      {
        $pull: { comment: { _id: comment_id } }
      }
    );
    if (data.modifiedCount == 0) throw 'Gagal menghapus komentar';
    res.status(200).json({ message: 'Berhasil menghapus komentar' });
  } catch (error) {
    errors(res, 400, error);
  }
};
