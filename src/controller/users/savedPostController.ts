import { Request, Response } from 'express';
import user from '../../model/user';

export const savePostByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id, post_id } = req.params;
  try {
    const data = await user.updateOne(
      { _id: user_id },
      {
        $addToSet: { saved: post_id }
      }
    );
    if (data.modifiedCount == 0) throw 'Gagal Menyimpan Post';
    res.status(200).json({
      message: 'Berhasil Menyimpan Post'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deleteSavePostByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { user_id, post_id } = req.params;
  try {
    const data = await user.updateOne(
      { _id: user_id },
      {
        $pull: { saved: post_id }
      }
    );
    if (data.modifiedCount == 0) throw 'Gagal Menghapus Post';
    res.status(200).json({
      message: 'Berhasil Menghapus Post'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
