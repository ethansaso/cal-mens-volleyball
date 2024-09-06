import { Col, Row } from "reactstrap";

const Donate = () => {
    return (
      <>
        <header className="donations-header-container">
          <h1 className="header-banner-content display-1">
            Donate
          </h1>
        </header>
        <main className="main">
          <Row>
            <Col>
              <div style={{display: 'flex'}}>
                <img src="" />
                <a href="https://givingday.berkeley.edu/">Big Give website</a>
              </div>
            </Col>
          </Row>
        </main>
      </>
    )
}

export default Donate;