import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home/Home.jsx";
import FindAStation from "./pages/FindAStation/FindAStation.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-a-station" element={ <FindAStation/>} />
      </Routes>
    </>
  );
}

export default App;
