import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";
import { Row, Col, Container } from 'react-bootstrap';
import Proptypes from 'prop-types'
import HappyBurger from '../img/portada_burger.jpg'
import LogoYunga from '../img/yunga.jpg'
import '../styles/portada.css'
import portada from '../assets/img/yungannabis.png'

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
                    <h1 className='tituloo text-center mb-4 animate__backInRight'>{titulo}</h1>
                    <p className="txt-portada text-center mb-5"> {descripccion} </p>
                    <Button className='boton-portada mt-3' variant="outline-light">Conócenos</Button>
                </Col>
            </Row>
        </Container>
        // <>
        //     <div className="container-fluid">
        //         <div className="row portada">
        //             <div className="col-lg-8 portada-imagen">
        //                 <img src={portada} alt="" />
        //             </div>
        //             <div className="col-lg-4 mb-5 portada-descripccion">
        //                 <h1 className='mt-3'>{titulo}</h1>
        //                 <p className="mb-5"> {descripccion} </p>
        //                 <Button className='boton-portada mt-5' variant="outline-dark">Conocenos!</Button>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}

Portada.propTypes = {
    titulo:PropTypes.string.isRequired,
    descripccion:PropTypes.string.isRequired
};

export default Portada

