import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom"
import VarsitySwiper from "./components/nav/VarsitySwiper";
import Navigation from "./components/nav/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Roster from "./components/pages/Roster";
import Schedule from "./components/pages/Schedule";
import './App.css';
import Footer from "./components/nav/Footer";
import Donate from "./components/pages/Donate";
import Resources from "./components/pages/Resources";

const path_prefix = process.env.NODE_ENV === 'production' ? "/cal-mens-volleyball/" : '/'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.hash.substring(1); // Extract the path from the hash

    if (path && path !== '/') {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return (
    <div className="layout">
      <VarsitySwiper />
      <Navigation />
      <div className="content">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"donations"} element={<Donate />} />
          <Route path={"resources"} element={<Resources />} />
          <Route path={"roster"} element={<Roster />} />
          <Route path={"schedule"} element={<Schedule />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename={path_prefix}>
      <App />
    </Router>
  );
}

export default AppWrapper;