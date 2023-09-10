import Button from 'react-bootstrap/Button';
import portada from '../img/IMG_4484.jpg'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const Portada = ({ titulo, descripccion }) => {
    return (
        <Row>
            <Col className="col-lg-4 mb-5">
            <img src={portada} alt="Portada" className='portada_home' />
                    <h1 className='mt-3 animate__zoomInLeft'>{ titulo }</h1>
                    <p className="mb-5"> { descripccion } </p>
                    <Button className='boton-portada mt-5' variant="outline-light">Click</Button>
            </Col>
        </Row>
    );
}



export default Portada

//className="col-lg-8 portada-imagen" className="row portada" 
/*<div>
    imagen            portada-descripccion
</div>*/

//<img src={portada} alt="Portada" className='portada_home' />