import token from '../../model/token';

export const createVerifyToken = async (email: string) => {
  const token_number = Math.floor(100000 + Math.random() * 900000);
  const data = new token({ email, token_number });

  try {
    await data.save();
  } catch (error) {
    console.log(error);
  }
};
