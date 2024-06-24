import { WebSocket, WebSocketServer } from "ws";
import http from "http";

interface UserInRoom {
  socket: WebSocket;
  roomId: string;
}

export default class SocketService {
  private _wss: WebSocketServer | null = null;
  private counter = 0;
  private _active_users_map = new Map<number, UserInRoom>();

  constructor(server: http.Server) {
    try {
      this._wss = new WebSocketServer({ server });
      this.listenToEvents(this._wss);
    } catch (err) {
      console.log(err);
      this._wss = null;
    }
  }

  private listenToEvents(wss: WebSocketServer) {
    wss.on("connection", (socket) => {
      const socketId = this.counter++;

      socket.on("message", (message) => {
        const roomId = JSON.parse(message.toString()) as { roomId: string };
        this._active_users_map.set(socketId, { socket, roomId: roomId.roomId });
        socket.send("SUCCESFULLY JOINED ROOM");
      });
    });
  }
  

  get ws() {
    return this._wss;
  }
}
