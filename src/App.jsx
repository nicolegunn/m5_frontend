import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import FindAStation from "./pages/FindAStation/FindAStation.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-station" element={ <FindAStation/>} />
      </Routes>
    </>
  );
}

export default App;
