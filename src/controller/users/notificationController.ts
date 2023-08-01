import { Request, Response } from 'express';
import { errors } from '../../utils/service/error';
import user from '../../model/user';

export const markAsAllReadController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { notification_id } = req.body;
  try {
    await user.updateMany(
      {
        _id: req.params.user_id,
        'notification._id': { $in: notification_id }
      },
      { $set: { 'notification.$[element].isRead': true } },
      {
        arrayFilters: [{ 'element._id': { $in: notification_id } }],
        new: true
      }
    );
    res.status(200).json({ data: 'Berhasil Membaca Notifikasi' });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const markAsReadController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { notification_id } = req.body;
  try {
    await user.updateMany(
      {
        _id: req.params.user_id,
        'notification._id': notification_id
      },
      { $set: { 'notification.$.isRead': true } }
    );
    res.status(200).json({ data: 'Berhasil membaca notifikasi' });
  } catch (error) {
    errors(res, 400, error);
  }
};
