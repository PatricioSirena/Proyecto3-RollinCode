import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import val from '../img/val.jpg';
import pato from '../img/pato.jpg';
import tutty from '../img/tutty.jpg';


const AboutUs = () => {

  return (
    <Container className='caja__aboutUs aligh-items-center justify-content-center'>
      <h2 className='team'>El Team</h2>
      <Row className='filaAboutUs'>
        <Col xs={6} className='colAboutUs mb-5'>
          <Card style={{width: '18rem'}} className='profile-AboutUs1'>
            <Card.Img className='foto-about fixed sticky' variant="top" src={pato} />
            <Card.Body className='cuerpo-about'>
              <Card.Title>Patricio Sirena</Card.Title>
              <Card.Text>
                Scrum Master / Web Dev
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} className='colAboutUs mb-5'>
          <Card style={{width: '18rem'}} className='profile-AboutUs2'>
            <Card.Img className='foto-about' variant="top" src={tutty} />
            <Card.Body className='cuerpo-about'>
              <Card.Title>Tutty Santochi</Card.Title>
              <Card.Text>
                Web Dev 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='filaAboutUs'>
        <Col xs={6} className='colAboutUs mb-5'>
          <Card style={{width: '18rem'}} className='profile-AboutUs3'>
            <Card.Img className='foto-about' variant="top" src={val} />
            <Card.Body className='cuerpo-about'>
              <Card.Title>Valentina Caceres</Card.Title>
              <Card.Text>
                Web Dev / UI Designer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col xs={6} className='colAboutUs mb-5'>
          <Card style={{width: '18rem'}} className='profile-AboutUs4'>
            <Card.Img className='foto-about' variant="top" src="" />
            <Card.Body className='cuerpo-about'>
              <Card.Title>Mariano Spector</Card.Title>
              <Card.Text>
                Web Dev
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs;