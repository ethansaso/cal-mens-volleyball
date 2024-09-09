import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import BigGiveLogo from "../../assets/img/big-give-logo.png"

const Donate = () => {
    return (
      <>
        <header className="donations-header-container header-container">
          <h1 className="header-banner-content display-1">
            Donate
          </h1>
        </header>
        <main className="main">
          <Row className="gy-4">
            <Col sm="12" lg="6" mt-5>
                <Card>
                  <CardHeader style={{background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://media.istockphoto.com/id/1331003550/photo/on-campus-at-uc-berkley.jpg?s=612x612&w=0&k=20&c=5kFzYWf-JbBY6oYvqcmOavd2-GewcxL8NzqBbxUSMUA=)', height: '250px', backgroundSize: '100% auto', backgroundPosition: '0% 60%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <a href="https://givingday.berkeley.edu/">
                      <img src={BigGiveLogo} alt="UC Berkeley's Big Give donation logo." style={{width: '300px', height: 'auto'}}/>
                    </a>
                  </CardHeader>
                  <CardBody style={{padding: '20px'}}>
                    <h4>UC Berkeley's biggest donation campaign.</h4>
                    <div>The Big Give runs every year in second half of March and is the single largest source of funding for Cal Men's Volleyball.</div>
                  </CardBody>
                  <CardFooter style={{display: 'flex', justifyContent: 'center', padding: '15px'}}>
                    <Button href="https://givingday.berkeley.edu/" color="warning" className="cta-button">
                      <h2 style={{fontFamily: 'Blockletter', marginBottom: '0'}}>
                        Big Give Website
                      </h2>
                    </Button>
                  </CardFooter>
                </Card>

            </Col>
            <Col sm="12" lg="6">
              <Card>
                <CardHeader style={{background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://www.shutterstock.com/image-photo/berkeley-landmark-drone-evening-600nw-1633716853.jpg)', height: '250px', backgroundSize: '100% auto', backgroundPosition: '0% 20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <h1 className="display-1" style={{fontFamily: 'Blockletter', maxWidth: '70%'}}>Donations</h1>
                </CardHeader>
                <CardBody style={{padding: '20px'}}>
                  <h4>Personally support the team.</h4>
                  <div>Get in touch with leadership below if you'd like to support the team by making a donation.</div>
                </CardBody>
                <CardFooter style={{display: 'flex', justifyContent: 'center', padding: '15px'}}>
                  <Button href="mailto:cal.mensvb@gmail.com" color="warning" className="cta-button">
                    <h2 style={{fontFamily: 'Blockletter', marginBottom: '0'}}>
                      Email Us
                    </h2>
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </main>
      </>
    )
}

export default Donate;