import Button from 'react-bootstrap/Button';
import portada from '../img/pasta--.jpg'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const Portada = ({ titulo, descripccion }) => {
    return (
        <Row className='row_portada justify-content-center'>
            <Col className="col-lg-4 mb-5">
            
                    <h1 className='tituloo text-center mt-3 animate__zoomInLeft'>{ titulo }</h1>
                    <p className="text-center mb-5"> { descripccion } </p>
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