import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const PORT = 3500;

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", () => {
  console.log("Connected ");
});

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
