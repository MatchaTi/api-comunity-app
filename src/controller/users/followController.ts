import { Request, Response } from 'express';
import user from '../../model/user';

export const followingUser = async (req: Request, res: Response) => {
  const { user_id, user_follow_id } = req.params;
  try {
    const data = await user.updateOne(
      { _id: user_id },
      {
        $push: { following: user_follow_id }
      }
    );
    if (data.modifiedCount == 0) throw 'Gagal Menambahkan Teman';
    res.status(200).json({
      message: 'Berhasil Menambahkan Teman'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const unFollowUser = async (req: Request, res: Response) => {
  const { user_id, user_follow_id } = req.params;
  try {
    const data = await user.updateOne(
      { _id: user_id },
      {
        $pull: { following: user_follow_id }
      }
    );
    if (data.modifiedCount == 0) throw 'Gagal Menghapus Teman';
    res.status(200).json({
      message: 'Berhasil Menghapus Teman'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
