import express from "express";
import http from "http";

const port = 3200;
const app = express();

const server = http.createServer(app);


app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`);
});
