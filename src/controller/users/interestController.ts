import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import user from '../../model/user';

export const addUserInterest = async (req: Request, res: Response) => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array() });
  }
  const { user_id } = req.params;

  const users = await user.findById(user_id);

  if (!users) throw 'users tidak ditemukan';

  const { interest } = users;

  try {
    await user.findByIdAndUpdate(user_id, {
      interest: [...interest, ...req.body.interest],
      ...req.body
    });
    res.status(200).json({
      message: 'Berhasil menambahkan interest'
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
