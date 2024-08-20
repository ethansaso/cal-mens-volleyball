import {Swiper, SwiperSlide} from "swiper/react"
import ReactLogo from "../../assets/img/logo192.png"
import "swiper/css"

const VarsitySwiper = () => {
  const matches = [
    { homeTeam: "team1", visitorTeam: "team2", date: "2024-08-20" },
    { homeTeam: "team3", visitorTeam: "team4", date: "2024-08-21" },
    { homeTeam: "team5", visitorTeam: "team6", date: "2024-08-22" },
    { homeTeam: "team7", visitorTeam: "team8", date: "2024-08-22" },
    // Add more matches as needed
  ];

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
                <img className="team-logo" alt="Team logo" src={ReactLogo}></img>
                <div className='team-name'>{match.homeTeam}</div>
              </div>
              <div className="team-container">
                <img className="team-logo" alt="Team logo" src={ReactLogo}></img>
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