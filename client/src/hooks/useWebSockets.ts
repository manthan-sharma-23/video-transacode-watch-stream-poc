import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { WebSocketAtom } from "../store/ws.atom";
import { useEffect } from "react";
import { WS_URL } from "../config/config";

export const useWebSocket = () => {
  const { roomId } = useParams();
  const [ws, setWs] = useRecoilState(WebSocketAtom);

  useEffect(() => {
    const wsInstance = new WebSocket(WS_URL);

    wsInstance.onopen = () => {
      const register_user = {
        roomId,
      };

      setWs(wsInstance);

      wsInstance.send(JSON.stringify(register_user));

      wsInstance.onmessage = (message) => {
        console.log(message.data);
      };
    };
  }, [roomId]);

  return ws;
};
