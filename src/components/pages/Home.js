import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalLogo from "../../assets/img/cal-logo.png"
import i1 from "../../assets/img/action-shots/i2.jpg"
import i2 from "../../assets/img/action-shots/i3.jpg"
import { Button } from "reactstrap";

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
      <div className="home-content">
        <div className="home-section" style={{backgroundColor: 'white'}}>
          <div className="home-text-container">
            <div className="home-section-text-wrapper">
              <h1 className="display-5" style={{fontWeight: 'bold'}}>
                Six-time <span style={{color: '#ffc72c'}}>national club champions</span>.
              </h1>
              <h4>
                Each year, Cal Men's Volleyball contends with top schools across the country for the coveted National Championship title.
              </h4>
            </div>
          </div>
          <div className="home-image-container">
            <img className="home-image hi1" src={i1} alt="test" />
          </div>
        </div>
        <div className="home-section" style={{backgroundColor: "#02132B", color: "#fff"}}>
          <div className="home-image-container">
            <img className="home-image hi2" src={i2} alt="test" />
          </div>
          <div className="home-text-container">
            <div className="home-section-text-wrapper">
              <h1 className="display-5" style={{fontWeight: 'bold'}}>
                Official <span style={{color: '#ffc72c'}}>Division I competitors</span>.
              </h1>
              <h4>
                Cal Men's competes both in the Northern California Collegiate Volleyball League (NCCVL) during spring, and the National Championships hosted by the National Collegiate Volleyball Federation (NCVF) in April.
              </h4>
            </div>
          </div>
        </div>
        <div className="home-cta">
          <h1 className="display-4" style={{fontWeight: 'bold'}}>Become a part of <span style={{color: '#ffc72c'}}>Cal's history.</span></h1>
          <h4 style={{marginBottom: '20px'}}>Get the latest tryout & event details for Cal Men's Volleyball.</h4>
          <Button href="forms.gle/rr886m2Fgmikk4WW6" color="warning" style={{padding: '10px 30px'}}>
            <h2 style={{fontFamily: 'Blockletter', margin: 0}}>SIGN UP</h2>
          </Button>
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