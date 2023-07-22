import user from '../../model/user';

export const addUserSocketID = async (
  username: string,
  socket_id: string
): Promise<void> => {
  await user.updateOne(
    { username },
    {
      socket_id
    }
  );
};

export const removeUserSocketID = async (socket_id: string): Promise<void> => {
  await user.updateOne(
    { socket_id },
    {
      socket_id: 'disconnect'
    }
  );
};

export const getSocketID = async (username: string): Promise<string> => {
  const data = await user.findOne({ username }, 'socket_id');
  return data ? data.socket_id : 'kosong';
};
