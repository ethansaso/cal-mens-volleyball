const path_prefix = process.env.NODE_ENV === 'production' ? "/cal-mens-volleyball/" : '/'

const About = () => {
    return (
      <>
        <header className="about-header-container">
          <h1 className="more-header-content display-1">
            About the Team
          </h1>
        </header>
        <main className="main">
          <h2 style={{fontWeight: 'bold'}}>
            Six-Time National Champions
          </h2>
          <p>
            Men's Volleyball competes in the Northern California Collegiate Volleyball League yearly for the Northern California Regional and National Championship titles.
          </p>
          <h2 style={{fontWeight: 'bold'}}>
            Division-I College Club Volleyball
          </h2>
          <p>
            During our primary season in the spring, the team competes in the Northern California Collegiate Volleyball League (NCCVL). In April, the team competes at the National Championships hosted by the National Collegiate Volleyball Federation (NCVF).
          </p>
          <h2 style={{fontWeight: 'bold'}}>
            Commitment
          </h2>
          <p>
            Cal Men's Volleyball requires a player to attend practices and tournaments on a regular basis to be considered for a starting position. A player's workload may vary, however, the team includes students spanning all majors, colleges, and unit loads from 12-20 units per semester. Cal Men's Volleyball is flexible for players and understand outstanding circumstances in which a player may not be able to attend some practices.
          </p>
          <h2 style={{fontWeight: 'bold'}}>
            Travel
          </h2>
          <p>
            Cal Men's Volleyball requires a player to attend practices and tournaments on a regular basis to be considered for a starting position. A player's workload may vary, however, the team includes students spanning all majors, colleges, and unit loads from 12-20 units per semester. Cal Men's Volleyball is flexible for players and understand outstanding circumstances in which a player may not be able to attend some practices.
          </p>
          <h2 style={{fontWeight: 'bold'}}>
            Recruiting
          </h2>
          <p>
            Looking to join the team? Head on over to our <a href={`${path_prefix}resources`}>resources page!</a>
          </p>
        </main>
      </>
    )
}

export default About;