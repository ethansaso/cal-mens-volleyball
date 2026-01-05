import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
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

function App() {
  return (
    <div className="layout">
      <VarsitySwiper />
      <Navigation />
      <div className="content">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/donations"} element={<Donate />} />
          <Route path={"/new-players"} element={<NewPlayers />} />
          <Route path={"/current-players"} element={<CurrentPlayers />} />
          <Route path={"/roster"} element={<Roster />} />
          <Route path={"/schedule"} element={<Schedule />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
