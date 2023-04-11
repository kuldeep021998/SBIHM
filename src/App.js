import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Count from "./Component/Home/Count";
import H1 from "./Component/Home/H1";
import H2 from "./Component/Home/H2";
import H3 from "./Component/Home/H3";
import Map from "./Component/Home/Map";
import Slider1 from "./Component/Home/Slider1";
import Slider2 from "./Component/Home/Slider2";
import Slider3 from "./Component/Home/Slider3";
import Header from "./Component/Home/Header";
import Footer from "./Component/Footer";
import C1 from "./Component/Course/C1";
import C2 from "./Component/Course/C2";
import C3 from "./Component/Course/C3";
import Apply from "./Component/Apply/Apply";
import Map1 from "./Component/Map1";
import Zoom1 from "./Component/Home/Zoom1";
import Zoom2 from "./Component/Home/Zoom2";
import ContactUs from "./Component/ContactUs";
import List from "./Component/AboutUs/List";
import AboutUs from "./Component/AboutUs/AboutUs";
import Images1 from "./Component/AboutUs/Image1";
import Images2 from "./Component/AboutUs/Images2";
import Course from "./Component/Course/Course";
import Abc from "./Component/Abc";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Abc />} path="/abc" />
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
        <Route element={<C2 />} path="/C2" />
        <Route element={<C3 />} path="/C3" />
        <Route element={<Map />} path="/Map" />
        <Route element={<Map1 />} path="/Map1" />
        <Route element={<ContactUs />} path="/ContactUs" />
        <Route element={<Course />} path="/Course" />
        <Route element={<AboutUs />} path="/AboutUs" />
        <Route element={<List />} path="/List" />
        <Route element={<Images1 />} path="/Image1" />
        <Route element={<Images2 />} path="/Image" />
      </Routes>
    </Router>
  );
}

export default App;
