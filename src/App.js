import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Result from "./pages/Result";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ApplyOnline from "./pages/ApplyOnline";
import Enquiry from "./pages/Enquiry";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/course" exact element={<Course />} />
          <Route path="/result" exact element={<Result />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/aboutUs" exact element={<AboutUs />} />
          <Route path="/contactUs" exact element={<ContactUs />} />
          <Route path="/applyOnline" exact element={<ApplyOnline />} />
          <Route path="/enquiry" exact element={<Enquiry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
