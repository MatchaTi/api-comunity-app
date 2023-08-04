import otp from '../../model/otp';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { logger } from '../../config/winston';

export const createOtpToken = async (email: string) => {
  await otp.findOneAndRemove({ email });

  const otp_number = Math.floor(100000 + Math.random() * 900000);
  const data = new otp({ email, otp_number });

  const view = await ejs.renderFile(
    path.join(__dirname, '../../views/otp.ejs'),
    {
      data
    }
  );
  try {
    await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.EMAIL_PASS
      }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: email, // list of receivers
      subject: 'COMMITAN', // Subject line
      text: 'Silahkan MemVerfikasi Kode Anda', // plain text body
      html: view // html body
    });

    if (info.messageId) await data.save();
  } catch (error: any) {
    logger.log({
      level: 'error',
      message: error || 'error forgot password'
    });
  }
};
