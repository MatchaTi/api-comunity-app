import token from '../../model/otp';

export const createOtpToken = async (email: string) => {
  const otp_number = Math.floor(100000 + Math.random() * 900000);
  const data = new token({ email, otp_number });

  try {
    await data.save();
  } catch (error) {
    console.log(error);
  }
};
