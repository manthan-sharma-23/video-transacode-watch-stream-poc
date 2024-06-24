import express from "express";
import cors from "cors";
import http from "http";
import SocketService from "./services/Socket.service";

const PORT = 3500;
const ws_url = `ws://localhost:${PORT}`;
const http_url = `http://localhost:${PORT}`;

const app = express();

app.use(cors());

const server = http.createServer(app);
const _wss = new SocketService(server).ws;

server.listen(PORT, () => {
  console.log(`HTTP Server at ${http_url}`);
  if (_wss) {
    console.log(`Web Socket Server active at ${ws_url}`);
  }
});
