import React from "react";
import { useWebSocket } from "../hooks/useWebSockets";

const StreamRoom = () => {
  const ws=useWebSocket();
  return <div>StreamRoom</div>;
};

export default StreamRoom;
