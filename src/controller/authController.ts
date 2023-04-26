import user from '../model/user';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { createToken } from '../utils/service/jwt';
import { createVerifyToken } from '../utils/service/token';
import { generateUsername } from '../utils/service/user';

export const register = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array(), ini: 'error' });
  }

  const username = await generateUsername(req.body.fullname);
  const data = new user({
    _id: uuidv4(),
    ...req.body,
    credential: {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password.toLowerCase(), salt)
    },
    username
  });

  //create token
  // const token = createToken(data);

  try {
    await data.save();
    await createVerifyToken(data.credential.email);
    res.status(400).json({
      data,
      message: 'Akun Sudah Teregistrasi, Harap Untuk MemVerfikasi Akun Anda'
    });
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};
