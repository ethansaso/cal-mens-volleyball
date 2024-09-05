import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom"
import VarsitySwiper from "./components/nav/VarsitySwiper";
import Navigation from "./components/nav/Navigation";
import Home from "./components/pages/Home";
import Roster from "./components/pages/Roster";
import Schedule from "./components/pages/Schedule";
import './App.css';
import Footer from "./components/nav/Footer";
import Donate from "./components/pages/Donate";
import NewPlayers from "./components/pages/NewPlayers";
import CurrentPlayers from "./components/pages/CurrentPlayers";

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
          <Route path={"donations"} element={<Donate />} />
          <Route path={"new-players"} element={<NewPlayers />} />
          <Route path={"current-players"} element={<CurrentPlayers />} />
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