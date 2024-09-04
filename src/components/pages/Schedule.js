import CalLogo from "../../assets/img/cal-logo.png"
import MatchesJson from "../../data/matches.json"

const Schedule = () => {
    return (
        <main className="unimplemented-page">
          <img src={CalLogo} className="unimplemented-logo" alt="logo" />
          <p style={{marginBottom: 0}}>
            The schedule hasn't been released for this season--check back soon!
          </p>
          {/*
          {Object.keys(MatchesJson).map((date, index) => (
            // check if date is after current time, don't display if before current time
            // convert date to string
            // print some card that has all sorts of elements
          ))}
          */}
      </main>
    )
}

export default Schedule;