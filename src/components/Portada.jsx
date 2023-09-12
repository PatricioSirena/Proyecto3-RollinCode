import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import Proptypes from 'prop-types'
import HappyBurger from '../img/portada_burger.jpg'
import LogoYunga from '../img/yunga.jpg'
import '../styles/portada.css'


const Portada = ({ titulo, descripccion }) => {
    return (
        <Container fluid className='imagenPortada'>
            <Row>
                <Col lg={4} className='logoPortada text-center'>
                    <img className="imagen_portada_logo" src={HappyBurger} width={'950px'} alt="" />
                </Col>
                <Col className='logoPortadaa text-center'>
                    <img className="imagen_portada_yunga" src={LogoYunga} width={'170px'} alt="" />
                </Col>
                <Col lg={4}className="container-txt text-center">
                    <h1 className='tituloo text-center mb-4 animate__zoomInLeft'>{titulo}</h1>
                    <p className="txt-portada text-center mb-5"> {descripccion} </p>
                    <Button className='boton-portada mt-3' variant="outline-light">Conócenos</Button>
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
