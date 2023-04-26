import nodemailer from 'nodemailer';
import { createForgotToken } from './jwt';
import { IUser } from '../interface';

export const createForgotRoute = async ({ _id, credential }: IUser) => {
  const token = createForgotToken(_id);

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
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: credential.email, // list of receivers
      subject: 'COMMITAN', // Subject line
      text: 'Mengganti password Akun COMMITAN Anda', // plain text body
      html: `<p>link Mengganti password : <b><a href="https://api/v1/forgot-password/${token}">klik link disini</a><b/></p>` // html body
    });
  } catch (error) {
    console.log(error);
  }
};
