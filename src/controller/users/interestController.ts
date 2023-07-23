import { validationResult } from 'express-validator';
import { Request, Response } from 'express';
import user from '../../model/user';
import { errors } from '../../utils/service/error';

export const addUserInterest = async (
  req: Request,
  res: Response
): Promise<void> => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    res.json({ error: resultValidator.array() });
    return;
  }

  try {
    await user.updateOne(
      { _id: req.params.user_id },
      {
        $addToSet: { interest: req.body.interest }
      }
    );
    res.status(200).json({
      message: 'Berhasil menambahkan interest'
    });
  } catch (error) {
    errors(res, 400, error);
  }
};
