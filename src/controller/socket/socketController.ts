import { Server as socketServer } from 'socket.io';
import {
  addUserSocketID,
  getSocketID,
  removeUserSocketID
} from '../../utils/service/socket';

export const socketInitialize = (io: socketServer): void => {
  //io server
  io.on('connection', (socket) => {
    socket.on('addSocketUserId', (data) =>
      addUserSocketID(data.username, socket.id)
    );
    socket.on('kirim-notifikasi', async (pesan) => {
      const userSocketID = await getSocketID(pesan.username);
      socket.to(userSocketID).emit('notifikasi-baru', pesan.data);
    });
    io.on('disconnect', () => {
      console.log('disconnect', socket.id);
      removeUserSocketID(socket.id);
    });
  });
};
