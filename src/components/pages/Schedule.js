import CalLogo from "../../assets/img/cal-logo.png"
import MatchesJson from "../../data/matches.json"

const Schedule = () => {
    return (
        <div className="App">
        <header className="App-header">
          <img src={CalLogo} className="App-logo" alt="logo" />
          <p>
            Schedule page unimplemented
          </p>
          {Object.keys(MatchesJson).map((date, index) => (
            <p>{index}</p>
            // check if date is after current time, don't display if before current time
            // convert date to string
            // print some card that has all sorts of elements
          ))}
        </header>
      </div>
    )
}

export default Schedule;