import {Swiper, SwiperSlide} from "swiper/react"
import CalLogo from "../../assets/img/cal-logo.png"
import CPLogo from "../../assets/img/team-logos/Cal Poly Mustangs.svg"
import ChicoLogo from "../../assets/img/team-logos/Chico State Wildcats.svg"
import FresnoLogo from "../../assets/img/team-logos/Fresno State Bulldogs.svg"
import SCLogo from "../../assets/img/team-logos/Santa Clara Broncos.svg"
import StanfordLogo from "../../assets/img/team-logos/Stanford Cardinal Icon.svg"
import SacLogo from "../../assets/img/team-logos/Sacramento State Hornets.svg"
import DavisLogo from "../../assets/img/team-logos/UC Davis Aggies.svg"
import SonomaLogo from "../../assets/img/team-logos/Sonoma Seawolves.svg"
import "swiper/css"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const VarsitySwiper = () => {
  const matches = [
    { homeTeam: "Stanford", visitorTeam: "California", date: "2025-01-29 | 10:00 a.m. PT" },
    { homeTeam: "California", visitorTeam: "Chico State", date: "2025-02-17 | 10:00 a.m. PT" },
    { homeTeam: "California", visitorTeam: "Fresno State", date: "2025-02-26 | 10:00 a.m. PT" },
    { homeTeam: "Santa Clara", visitorTeam: "California", date: "2025-03-07 | 10:00 a.m. PT" },
    { homeTeam: "California", visitorTeam: "Sacramento State", date: "2025-03-08 | 10:00 a.m. PT" },
    { homeTeam: "UC Davis", visitorTeam: "California", date: "2025-03-21 | 10:00 a.m. PT" },
    { homeTeam: "California", visitorTeam: "Sonoma State", date: "2025-03-29 | 10:00 a.m. PT" },
    // Add more matches as needed
  ];

  const teamToSVG = {
    "Stanford": StanfordLogo,
    "Chico State": ChicoLogo,
    "Fresno State": FresnoLogo,
    "Cal Poly SLO": CPLogo,
    "Santa Clara": SCLogo,
    "California": CalLogo,
    "Sacramento State": SacLogo,
    "UC Davis": DavisLogo,
    "Sonoma State": SonomaLogo,
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