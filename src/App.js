import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs/AboutUs";
import CoursePage from "./Component/Course/CoursePage";
import ApplyPage from "./Component/Apply/ApplyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<ApplyPage />} path="/ApplyPage" />
        <Route element={<ContactUs />} path="/ContactUs" />
        <Route element={<CoursePage />} path="/CoursePage" />
        <Route element={<AboutUs />} path="/AboutUs" />
      </Routes>
    </Router>
  );
}

export default App;
