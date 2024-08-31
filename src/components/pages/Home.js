import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalLogo from "../../assets/img/cal-logo.png"

const Home = () => {
  return (
    <div className="home">
      <div className="home-title-banner">
        <div className="home-title-content">
          <div className="home-title-logo">
            <img className="home-title-image" src={CalLogo} alt="logo" />
            <h1 className="home-title-text">MEN'S VOLLEYBALL</h1>
          </div>
          <div className="icon-container">
            {[...Array(8)].map((_, i) => (
              <FontAwesomeIcon key={i} icon="fa-solid fa-volleyball" fixedWidth />
            ))}
          </div>
        </div>
      </div>
      {/*
      <div className="main">
        <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h4>
      </div>
      */}
    </div>
  )
}

export default Home;