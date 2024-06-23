import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import StreamRoom from "./pages/StreamRoom";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stream/:roomId" element={<StreamRoom />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
