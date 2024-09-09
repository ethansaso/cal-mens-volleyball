import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserClock, faEarth, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";

const NewPlayers = () => {

  return (
    <>
      <header className="new-players-header-container">
        <h1 className="header-banner-content display-1">
          Info - New Players
        </h1>
      </header>
      <main className="main">
        <Row>
          <Col sm="12" md="6" lg="4" className="new-info-col">
            <Card className="new-info-card">
              <CardHeader>
                <CardTitle tag="h2" style={{margin: '10px 0px 5px 0px'}}>
                  <FontAwesomeIcon icon={faUserClock} fixedWidth size="sm" style={{marginRight: '0.5rem', color: '#fb0'}}/>
                  Commitment
                </CardTitle>
              </CardHeader>
              <CardBody style={{height: '100%'}}>
                <h6>Players must attend practices and tournaments on a regular basis to be considered for a starting position.</h6>
                <p>However, Cal Men's Volleyball is flexible for players; we understand outstanding circumstances in which a player may not be able to attend some practices.</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="4" className="new-info-col">
            <Card className="new-info-card">
              <CardHeader>
                <CardTitle tag="h2" style={{margin: '10px 0px 5px 0px'}}>
                  <FontAwesomeIcon icon={faEarth} fixedWidth size="sm" style={{marginRight: '0.5rem', color: '#fb0'}}/>
                  Travel
                </CardTitle>
              </CardHeader>
              <CardBody>
                <h6>All regional matches and tournaments take place within the greater Northern California area</h6>
                <p>The 3-day NCVF National Championships occur during the month of April and may be hosted anywhere in the continental United States.</p>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" lg="4" className="new-info-col">
            <Card className="new-info-card">
              <CardHeader>
                <CardTitle tag="h2" style={{margin: '10px 0px 5px 0px'}}>
                  <FontAwesomeIcon icon={faClock} fixedWidth size="sm" style={{marginRight: '0.5rem', color: '#fb0'}}/>
                  Tryouts
                </CardTitle>
              </CardHeader>
              <CardBody>
                <h6>Cal Men's Volleyball hosts tryouts in the early weeks of September. </h6>
                <p>Competitions begin in the spring in the NCVF League against local rivals including Cal Poly SLO, UC Davis, and Stanford. The season concludes with the NCVF National Championships in early April.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag="h2" style={{margin: '10px 0px 5px 0px'}}>
                  Club Dues
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table bordered={true}>
                  <thead>
                    <tr>
                      <th style={{width: '30%'}}>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Fall</th>
                      <td>$500</td>
                    </tr>
                    <tr>
                      <th scope="row">Winter</th>
                      <td>$500</td>
                    </tr>
                    <tr>
                      <th scope="row">Annual</th>
                      <td>$1000</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <div className="new-info-cta">
          <Card className="new-info-cta-card">
            <h2 style={{fontWeight: 'bold', marginBottom: '15px'}}>
              Interested? Get in touch!
            </h2>
            <div style={{display: 'flex', gap: '5px', justifyContent: 'center'}}>
              <Button href="mailto:cal.mensvb@gmail.com" color="warning" className="cta-button">
              <FontAwesomeIcon icon={faEnvelope} fixedWidth size="xl" style={{marginRight: '0.5rem'}}/>
                <h2 style={{fontFamily: 'Blockletter', margin: 0}}>EMAIL</h2>
              </Button>
            </div>
          </Card>
        </div>
        
      </main>
    </>
  )
}

export default NewPlayers;
