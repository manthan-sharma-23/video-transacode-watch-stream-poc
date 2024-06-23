import React from "react";
import { useParams } from "react-router-dom";

const StreamRoom = () => {
  const { roomId } = useParams();
  return <div>{roomId}</div>;
};

export default StreamRoom;
