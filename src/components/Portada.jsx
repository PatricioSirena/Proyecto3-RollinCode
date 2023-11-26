import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
import Proptypes from 'prop-types'
import HappyBurger from '../img/portada_burger.jpg'
import LogoYunga from '../img/happy-yunga.jpg'
import '../styles/portada.css'

const Portada = ({ titulo, descripccion }) => {

    return (
        <>
            <Container fluid className='containerPortada'>
                <Row className='div-portada-cel'>
                    <Col lg={4} className='logoPortada text-center'>
                        <img className="imagen_portada_logo" src={HappyBurger} width={'470px'} alt="" />
                    </Col>
                    <Col lg={7} className="container-txt text-center">
                        <img className="imagen_portada_yunga" src={LogoYunga} width={'400px'} alt="" />
                        <br />
                        <h1 className='titulo-portada text-center mb-4 animate__backInRight'>{titulo}</h1>
                        <p className="txt-portada text-center mb-5"> {descripccion} </p>
                        <Button className='boton-portada mt-2' variant="outline-light">Conócenos</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

Portada.propTypes = {
    titulo: Proptypes.string.isRequired,
    descripccion: Proptypes.string.isRequired
}

export default Portada