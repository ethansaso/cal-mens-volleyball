import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row, Table } from "reactstrap";

const Resources = () => {
    return (
      <>
        <header className="resources-header-container">
          <h1 className="more-header-content display-1">
            Resources
          </h1>
        </header>
        <main className="main">
          <h2 style={{fontWeight: 'bold'}}>
            Tryouts
          </h2>
          <p>
            Cal Men's Volleyball hosts tryouts in the early weeks of September. In Spring, Cal competes in the Northern California College Volleyball League against local rivals including Cal Poly SLO, UC Davis, and Stanford. The season concludes with the NCVF National Championships in early April, where Cal regularly finishes within the top 10 teams across the nation in Division I.
          </p>
          <h2 style={{fontWeight: 'bold'}}>
            Club Dues
          </h2>
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
          <div style={{display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', marginTop: '50px'}}>
            <h2 style={{fontWeight: 'bold'}}>
              Get in Touch!
            </h2>
            <div style={{display: 'flex', gap: '5px'}}>
              <Button href="mailto:cal.mensvb@gmail.com" style={{textDecoration: 'none'}}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" fixedWidth style={{marginRight: '5px', position: 'relative'}}/>
                Club Email
              </Button>
              <Button href="https://www.instagram.com/calclubvolleyball/" style={{textDecoration: 'none'}}>
                <FontAwesomeIcon icon="fa-brands fa-instagram" fixedWidth style={{marginRight: '5px', position: 'relative'}}/>
                Instagram
              </Button>
              <Button href="https://www.facebook.com/calclubvball/" style={{textDecoration: 'none'}}>
                <FontAwesomeIcon icon="fa-brands fa-facebook" fixedWidth style={{marginRight: '5px', position: 'relative'}}/>
                Facebook
              </Button>
            </div>
          </div>
          
        </main>
      </>
    )
}

export default Resources;