import {Swiper, SwiperSlide} from "swiper/react"
import CalLogo from "../../assets/img/cal-logo.png"
import CPLogo from "../../assets/img/team-logos/Cal Poly Mustangs.svg"
import ChicoLogo from "../../assets/img/team-logos/Chico State Wildcats.svg"
import FresnoLogo from "../../assets/img/team-logos/Fresno State Bulldogs.svg"
import SCLogo from "../../assets/img/team-logos/Santa Clara Broncos.svg"
import StanfordLogo from "../../assets/img/team-logos/Stanford Cardinal Icon.svg"
import "swiper/css"

const VarsitySwiper = () => {
  const matches = [
    { homeTeam: "Stanford", visitorTeam: "UC Berkeley", date: "2025-01-29 | 10:00 a.m. PT" },
    { homeTeam: "UC Berkeley", visitorTeam: "Chico State", date: "2025-02-17 | 10:00 a.m. PT" },
    { homeTeam: "UC Berkeley", visitorTeam: "Fresno State", date: "2025-02-26 | 10:00 a.m. PT" },
    { homeTeam: "Santa Clara", visitorTeam: "UC Berkeley", date: "2025-03-07 | 10:00 a.m. PT" },
    // Add more matches as needed
  ];

  const teamToSVG = {
    "Stanford": StanfordLogo,
    "Chico State": ChicoLogo,
    "Fresno State": FresnoLogo,
    "Cal Poly SLO": CPLogo,
    "Santa Clara": SCLogo,
    "UC Berkeley": CalLogo
  }

  return (
    <Swiper
      slidesPerView='auto'
      centerInsufficientSlides='true'
    >
      {matches.map((match, index) => (
        <SwiperSlide key={index}>
          <div className="varsity-slide">
            <div className="varsity-slide-teams">
              <div className="team-container">
                <img className="team-logo" alt="Team logo" src={teamToSVG[match.homeTeam]}></img>
                <div className='team-name'>{match.homeTeam}</div>
              </div>
              <div className="team-container">
                <img className="team-logo" alt="Team logo" src={teamToSVG[match.visitorTeam]}></img>
                <div className='team-name'>{match.visitorTeam}</div>
              </div>
            </div>
            <div className="varsity-slide-date">{match.date}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default VarsitySwiper;