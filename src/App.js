import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Course1 from "./pages/courses/Course1";
import Course2 from "./pages/courses/Course2";
import Course3 from "./pages/courses/Course3";
import Course4 from "./pages/courses/Course4";
import Course5 from "./pages/courses/Course5";

import Result from "./pages/Result";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ApplyOnline from "./pages/ApplyOnline";
import Enquiry from "./pages/Enquiry";
import Footer from "./components/Footer";
import WrongPage from "./pages/WrongPage";
import RefundRules from "./pages/RefundRules";
import Rules_and_regulations from "./pages/Rules_and_regulations";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/course1" exact element={<Course1 />} />
          <Route path="/course2" exact element={<Course2 />} />
          <Route path="/course3" exact element={<Course3 />} />
          <Route path="/course4" exact element={<Course4 />} />
          <Route path="/course5" exact element={<Course5 />} />

          <Route path="/result" exact element={<Result />} />
          <Route path="/gallery" exact element={<Gallery />} />
          <Route path="/aboutUs" exact element={<AboutUs />} />
          <Route path="/contactUs" exact element={<ContactUs />} />
          <Route path="/applyOnline" exact element={<ApplyOnline />} />
          <Route path="/enquiry" exact element={<Enquiry />} />
          <Route path="/working" exact element={<WrongPage />} />
          <Route
            path="/rules_and_regulations"
            exact
            element={<Rules_and_regulations />}
          />

          <Route
            path="/refund_and_cancellation"
            exact
            element={<RefundRules />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
