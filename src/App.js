import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Apply from "./Component/Apply";
import Slider1 from "./Component/Slider1";
import Slider2 from "./Component/Slider2";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Footer />} path="/Footer" />
        <Route element={<Header />} path="/Header" />
        <Route element={<Apply />} path="/Apply" />
        <Route element={<Slider1 />} path="/Slider1" />
        <Route element={<Slider2 />} path="/Slider2" />
      </Routes>
    </Router>
  );
}

export default App;
