import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import '../App.css'

const TarjetaInfo = ({id, titulo, texto, imgSource }) => {
    return (
        <Container fluid>
            <Row className="tarjetaInfo" id={id? id: 'Ponele un id'}>
                <Col xl={7} lg={7} md={7} className="uno">
                    <h2 className="card_tittle">{titulo ? titulo : 'Debe ingresar un titulo'}</h2>
                    <p className="pp">{texto ? texto : 'El texto es requerido'}</p>
                </Col>
                <Col xl={5} lg={5} md={5} className="dos">
                    <Card.Img className="imagenTarjeta" src={imgSource ? imgSource : 'Debe ingresar una imagen'} />
                </Col>
            </Row>
        </Container>
    )
}

TarjetaInfo.propTypes = {
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    imgSource: PropTypes.string
}

export default TarjetaInfo