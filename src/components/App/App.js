import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Schedule from "../Schedule/Schedule";
import Amplify from "aws-amplify";
import awsconfig from "../../aws-exports";

const App = () => {
  Amplify.configure(awsconfig);

  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />

        <div className="content-wrapper">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
