import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Table } from "reactstrap";

const path_prefix = process.env.NODE_ENV === 'production' ? "/cal-mens-volleyball/" : '/'

const CurrentPlayers = () => {
    return (
      <>
        <header className="current-players-header-container">
          <h1 className="more-header-content display-1">
            Current Players
          </h1>
        </header>
        <main className="main">
          <h2 style={{fontWeight: 'bold'}}>
            Placeholder
          </h2>
          <p>
            Lorem ipsum.
          </p>
        </main>
      </>
    )
}

export default CurrentPlayers;