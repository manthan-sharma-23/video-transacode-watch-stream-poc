import { atom } from "recoil";

export const WebSocketAtom = atom({
  key: "socket/web/akey/defut/root",
  default: null as WebSocket | null,
});
