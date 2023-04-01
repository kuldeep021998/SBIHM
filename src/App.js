import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Apply from "./Component/Apply";
import Slider1 from "./Component/Slider1";
import Slider2 from "./Component/Slider2";
import H1 from "./Component/H1";
import Count from "./Component/Count";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/Home" />
        <Route element={<Footer />} path="/Footer" />
        <Route element={<Header />} path="/Header" />
        <Route element={<Apply />} path="/Apply" />
        <Route element={<Slider1 />} path="/Slider1" />
        <Route element={<Slider2 />} path="/Slider2" />
        <Route element={<H1 />} path="/H1" />
        <Route element={<Count />} path="/Count" />
      </Routes>
    </Router>
  );
}

export default App;
