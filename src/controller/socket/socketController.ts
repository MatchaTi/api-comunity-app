import { Server as socketServer } from 'socket.io';

export const socketInitialize = (io: socketServer): void => {
  //io server
  io.on('connection', (socket) => {
    socket.on('kirim-notifikasi', (pesan) => {
      console.log(pesan);
      socket.broadcast.emit('notifikasi-baru', pesan);
    });
  });

  io.on('disconnect', (reason) => {
    console.log(reason);
  });
};
