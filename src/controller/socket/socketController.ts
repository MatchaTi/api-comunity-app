import { Server as socketServer } from 'socket.io';
import {
  addUserSocketID,
  getSocketID,
  removeUserSocketID
} from '../../utils/service/socket';

export const socketInitialize = (io: socketServer): void => {
  //io server
  io.on('connection', (socket) => {
    socket.on('addSocketUserId', (data) => {
      addUserSocketID(data.username, socket.id);
    });
    socket.on('kirim-notifikasi', async (message) => {
      const userSocketID = await getSocketID(message.username);
      io.to(userSocketID).emit('notifikasi-baru', message.data);
    });
    socket.on('error', function (err) {
      console.log(err);
    });
    socket.on('disconnect', () => {
      socket.removeAllListeners('addSocketUserId');
      socket.removeAllListeners('kirim-notifikasi');
      socket.removeAllListeners('error');
      removeUserSocketID(socket.id);
    });
  });
};
