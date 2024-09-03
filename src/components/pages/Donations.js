import { Col, Row } from "reactstrap";

const Donations = () => {
    return (
      <>
        <header className="donations-header-container">
          <h1 className="donations-header-content display-1">
            Donations
          </h1>
        </header>
        <main className="main">
          <Row>
            <Col>
              <div style={{display: 'flex'}}>
                <img src="">
                </img>
                <h></h>
                <a href="https://givingday.berkeley.edu/">Big Give website</a>
              </div>
            </Col>
          </Row>
          <h2 style={{fontWeight: 'bold'}}>
            Unimplemented header
          </h2>
          <br />
          <h3>
            Unimplemented subheader
          </h3>
        </main>
      </>
    )
}

export default Donations;