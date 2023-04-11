import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import C1 from "./Component/Course/C1";
import C2 from "./Component/Course/C2";
import C3 from "./Component/Course/C3";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import Course from "./Component/Course/Course";
import ApplyPage from "./Component/Apply/ApplyPage";
import C6 from "./Component/Course/C6";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ApplyPage />} path="/ApplyPage" />
        <Route element={<C6 />} path="/C6" />
        <Route element={<ContactUs />} path="/ContactUs" />
        <Route element={<Course />} path="/Course" />
        <Route element={<AboutUs />} path="/AboutUs" />
      </Routes>
    </Router>
  );
}

export default App;
