import user from '../model/user';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { createToken } from '../utils/service/jwt';

export const register = async (req: Request, res: Response) => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array(), ini: 'error' });
  }

  const salt = await bcrypt.genSalt(10);
  const data = new user({
    _id: uuidv4(),
    ...req.body,
    credential: {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt)
    },
    username: `@${req.body.fullname}`
  });

  //create token
  const token = createToken(data);

  try {
    await data.save();
    res.status(400).json({ data, token });
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};
