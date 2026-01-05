import { useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/nav/Footer";
import Navigation from "./components/nav/Navigation";
import VarsitySwiper from "./components/nav/VarsitySwiper";
import CurrentPlayers from "./components/pages/CurrentPlayers";
import Donate from "./components/pages/Donate";
import Home from "./components/pages/Home";
import NewPlayers from "./components/pages/NewPlayers";
import Roster from "./components/pages/Roster";
import Schedule from "./components/pages/Schedule";

const path_prefix = "/";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.hash.substring(1); // Extract the path from the hash

    if (path && path !== "/") {
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
