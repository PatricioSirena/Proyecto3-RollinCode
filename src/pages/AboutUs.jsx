import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import val from '../img/val.jpg';
import pato from '../img/pato.jpg';
import tutty from '../img/tutty.jpg';
import { Button } from 'bootstrap';

const AboutUs = () => {
  return (
    <Container className='caja_aboutUs'>
      <Row className='filaAboutUs'>
        <h2 className='team'>El Team</h2>
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src={pato} />
            <Card.Body>
              <Card.Title>Patricio Sirena</Card.Title>
              <Card.Text>
                Scrum Master / Web Dev
              </Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src={tutty} />
            <Card.Body>
              <Card.Title>Tutty Santochi</Card.Title>
              <Card.Text>
                Web Dev 
              </Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='filaAboutUs'>
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src={val} />
            <Card.Body>
              <Card.Title>Valentina Caceres</Card.Title>
              <Card.Text>
                Web Dev / UI Designer
              </Card.Text>
            </Card.Body>
            <Button></Button>
          </Card>
        </Col>
        
        <Col className='colAboutUs'>
          <Card style={{width: '18rem'}} className='cardAboutUs'>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Mariano Spector</Card.Title>
              <Card.Text>
                Web Dev
              </Card.Text>
              <Button></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;