import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom"
import VarsitySwiper from "./components/nav/VarsitySlider";
import Navigation from "./components/nav/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Roster from "./components/pages/Roster";
import Schedule from "./components/pages/Schedule";
import './App.css';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.hash.substring(1); // Extract the path from the hash

    if (path && path !== '/') {
      navigate(path);
    }
  }, [navigate]);

  return (
    <div className="layout">
      <VarsitySwiper />
      <Navigation />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/'}>
      <App />
    </Router>
  );
}

export default AppWrapper;