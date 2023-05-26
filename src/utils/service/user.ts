import user from '../../model/user';

export const generateUsername = async (fullname: string): Promise<string> => {
  let username = `@${fullname.toLowerCase().replace(/\s/g, '')}`;

  const check = await user.findOne({ username });

  if (check) username = username + Math.floor(100000 + Math.random() * 900000);

  return username;
};
