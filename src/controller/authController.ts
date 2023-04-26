import user from '../model/user';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { createToken } from '../utils/service/jwt';
import { createVerifyToken } from '../utils/service/token';
import { generateUsername } from '../utils/service/user';
import token from '../model/token';

export const register = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    return res.json({ error: resultValidator.array() });
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

  try {
    await data.save();
    await createVerifyToken(data.credential.email);
    res.status(200).json({
      data,
      message: 'Akun Sudah Teregistrasi, Harap Untuk MemVerfikasi Akun Anda'
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

export const verifyTokenRegister = async (req: Request, res: Response) => {
  try {
    const users = await user.findOne({
      'credential.email': req.body.email
    });
    if (!users) throw 'Email Tidak Ditemukan Harap Registrasi Terlebih Dahulu';
    if (users.isActive) throw 'akun sudah terverifikasi';
    const tokenUser = await token.findOne({ email: req.body.email });
    if (!tokenUser) throw 'harap mengirim ulang verifikasi akun';
    if (req.body.token_number != tokenUser?.token_number) throw 'token salah';

    await users.updateOne({ isActive: true });
    const tokenJWT = createToken(users);

    res.status(200).json({
      message: 'berhasil menverifikasi akun',
      token: tokenJWT
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
