import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Apply from "./Component/Apply";
import Slider1 from "./Component/Slider1";
import Slider2 from "./Component/Slider2";
import Slider3 from "./Component/Slider3";
import H1 from "./Component/H1";
import Count from "./Component/Count";
import H2 from "./Component/H2";
import H3 from "./Component/H3";
import Zoom1 from "./Component/Zoom1";
import Zoom2 from "./Component/Zoom2";
import C1 from "./Component/C1";
import Map from "./Component/Map";
import ContactUs from "./Component/ContactUs";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Footer />} path="/Footer" />
        <Route element={<Header />} path="/Header" />
        <Route element={<Apply />} path="/Apply" />
        <Route element={<Slider1 />} path="/Slider1" />
        <Route element={<Slider2 />} path="/Slider2" />
        <Route element={<Slider3 />} path="/Slider3" />
        <Route element={<H1 />} path="/H1" />
        <Route element={<H2 />} path="/H2" />
        <Route element={<H3 />} path="/H3" />
        <Route element={<Count />} path="/Count" />
        <Route element={<Zoom1 />} path="/Zoom1" />
        <Route element={<Zoom2 />} path="/Zoom2" />
        <Route element={<C1 />} path="/C1" />
        <Route element={<Map />} path="/Map" />
        <Route element={<ContactUs />} path="/Contact Us" />
      </Routes>
    </Router>
  );
}

export default App;
