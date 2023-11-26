import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/aboutUs.css';
import { Button } from 'bootstrap';

const AboutUs = () => {
  return (
    <Container className='caja_aboutUs'>
      <Row className='filaAboutUs'>
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Patricio Sirena</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Tutty Santochi</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='filaAboutUs'>
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img className='round' variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Valentina Caceres</Card.Title>
              <h6 className='segundo-titulo-about'>Tucuman</h6>
              <Card.Text className='texto'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button className="primary">
                Mensaje
              </Button>
              <Button className="prymary ghost">
                Following
              </Button>
              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Mariano Spector</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;