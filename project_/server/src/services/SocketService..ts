import { WebSocket, WebSocketServer } from "ws";
import http from "http";

interface root_user_map {
  socket: WebSocket;
  roomId: number;
}

export class SocketService {
  private _wss: WebSocketServer;
  private _root_socket_user = new Map<number, root_user_map>();
  private _counter = 0;

  constructor(server: http.Server) {
    this._wss = new WebSocketServer({ server });
  }

  listenWebSocketServer(wss: WebSocketServer) {
    wss.on("connection", (socket) => {
      const socketId = this._counter++;

      socket.on("message", (msg) => {});
    });
  }
}
