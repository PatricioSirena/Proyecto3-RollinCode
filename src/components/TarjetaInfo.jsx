import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

const TarjetaInfo = ({id, titulo, texto, imgSource }) => {
    return (
        <Row className="container-fluid">
            <Col className="row tarjetaInfo d-flex" id={id? id: 'Ponele un id'}>
                <Col className="col-lg-7 uno">
                    <h2 className="card_tittle">{titulo ? titulo : 'Debe ingresar un titulo'}</h2>
                    <p className="pp">{texto ? texto : 'El texto es requerido'}</p>
                </Col>
                <Col className="col-lg-5 dos">
                    <Card.Img className="imagenTarjeta" src={imgSource ? imgSource : 'Debe ingresar una imagen'} />
                </Col>
            </Col>
        </Row>
    )
}

TarjetaInfo.propTypes = {
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired
}

export default TarjetaInfo