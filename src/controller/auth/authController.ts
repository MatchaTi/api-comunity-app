import user from '../../model/user';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { createToken } from '../../utils/service/jwt';
import { createOtpToken } from '../../utils/service/otp';
import { generateUsername } from '../../utils/service/user';
import otp from '../../model/otp';
import { createForgotRoute } from '../../utils/service/forgot';
import { expireTime } from '../../utils/service/time';
import { errors } from '../../utils/service/error';

export const register = async (req: Request, res: Response): Promise<void> => {
  const salt = await bcrypt.genSalt(10);
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    res.json({ error: resultValidator.array() });
    return;
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
    await createOtpToken(data.credential.email);
    res.status(201).json({
      message:
        'Akun Sudah berhasil Teregistrasi, Harap Untuk MemVerfikasi Akun Anda'
    });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const verifyTokenRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  const resultValidator = validationResult(req);
  if (!resultValidator.isEmpty()) {
    res.json({ error: resultValidator.array() });
    return;
  }
  try {
    const users = await user.findOne({
      'credential.email': req.body.email
    });
    if (!users) throw 'Email Tidak Ditemukan Harap Registrasi Terlebih Dahulu';
    if (users.isActive) throw 'akun sudah terverifikasi';
    const otpUser = await otp.findOne({ email: req.body.email });
    if (!otpUser) throw 'harap mengirim ulang verifikasi akun';
    if (expireTime(otpUser.created_at))
      throw 'code verifikasi sudah expire harap mengirim ulang code';
    if (req.body.otp_number != otpUser?.otp_number) throw 'token salah';

    await users.updateOne({ isActive: true });
    await otp.findOneAndRemove({ email: req.body.email });

    const tokenJWT = createToken(users);
    res.status(200).json({
      message: 'berhasil menverifikasi akun',
      token: tokenJWT
    });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const sendTokenRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await user.findOne({
      'credential.email': req.body.email
    });
    if (!users) throw 'Email Tidak Ditemukan Harap Registrasi Terlebih Dahulu';
    if (users.isActive) throw 'akun sudah terverifikasi';
    await createOtpToken(req.body.email);
    res.status(200).json({
      message: 'Harap Untuk Cek Email Anda Untuk Token Verifikasi'
    });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await user.findOne({
      'credential.email': req.body.email
    });
    if (!users) throw 'Email Tidak Ditemukan Harap Registrasi Terlebih Dahulu';
    if (!users.isActive)
      throw 'akun belum terverifikasi harap verifikasi akun terlebih dahulu';
    const match = await bcrypt.compare(
      req.body.password.toLowerCase(),
      users.credential.password
    );
    if (!match) throw 'password salah';

    const tokenJWT = createToken(users);

    res.status(200).json({
      message: 'berhasil login',
      token: tokenJWT
    });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  const salt = await bcrypt.genSalt(10);

  try {
    const users = await user.findById(res.locals.jwtPayload._id);

    if (!users) throw 'Email Tidak Ditemukan Harap Registrasi Terlebih Dahulu';
    if (!users.isActive)
      throw 'akun belum terverifikasi harap verifikasi akun terlebih dahulu';

    await user.findByIdAndUpdate(res.locals.jwtPayload._id, {
      'credential.password': await bcrypt.hash(
        req.body.new_password.toLowerCase(),
        salt
      )
    });

    res.status(200).json({
      message: 'berhasil mengubah password'
    });
  } catch (error) {
    errors(res, 400, error);
  }
};

export const sendForgotPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await user.findOne({
      'credential.email': req.body.email
    });
    if (!users) throw 'Email Tidak Ditemukan Harap Registrasi Terlebih Dahulu';
    if (!users.isActive)
      throw 'akun belum terverifikasi harap verifikasi akun terlebih dahulu';

    await createForgotRoute(users);

    res.status(200).json({
      message: 'harap cek email untuk mengganti password'
    });
  } catch (error) {
    errors(res, 400, error);
  }
};
