import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import Proptypes from 'prop-types'
import LogoYunga from '../img/logo_yungannabis.jpeg.jpg'
import '../styles/portada.css'


const Portada = ({ titulo, descripccion }) => {
    return (
        <Container fluid className='imagenPortada'>
            <Row>
                <Col lg={6} className='logoPortada text-center'>
                    <img src={LogoYunga} width={'300px'} alt="" />
                </Col>
                <Col lg={6} className="mb-5 text-center">
                    <h1 className='tituloo text-center mt-3 animate__zoomInLeft'>{titulo}</h1>
                    <p className="text-center mb-5"> {descripccion} </p>
                    <Button className='boton-portada mt-5' variant="outline-light">Click</Button>
                </Col>
            </Row>
        </Container>
    );
}

Portada.propTypes = {
    titulo: Proptypes.string.isRequired,
    descripccion: Proptypes.string.isRequired
}

export default Portada
