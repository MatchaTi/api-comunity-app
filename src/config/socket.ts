import { Server as socketServer } from 'socket.io';
import { Server } from 'http';

export const socketInitServer = (server: Server): socketServer => {
  const io: socketServer = new socketServer(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
      credentials: true
    }
  });
  return io;
};
