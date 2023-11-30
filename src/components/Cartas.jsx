import { Col, Container, Row } from "react-bootstrap";
import Carta from "./Carta";
import imagen1 from "../img/burger-1.jpg";
import imagen2 from "../img/beer.jpg";
import imagen3 from "../img/flores.jpg";

const cartas = [
    {
        id: 1,
        titulo: 'Comidas',
        imagen: imagen1,
        texto: 'Para bajonear',
        url: 'https://instagram.com'
    },
    {
        id: 2,
        titulo: 'Bebidas',
        imagen: imagen2,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    },
    {
        id: 3,
        titulo: 'Flores',
        imagen: imagen3,
        texto: 'Flores geneticas de Yunganabis',
        url: 'https://instagram.com'
    }
]

const Cartas = () => {
    return (
        <>
            <Container fluid className="containerCartas">
                    <h1 className="spoiler animate__zoomInLeft">Spoilers que sí.</h1>
                <Row className="rowCartas text-center">
                    {
                        cartas.map((carta) => (
                            <Col sm={3} key={carta.id}>
                                <Carta
                                    titulo={carta.titulo}
                                    imgSource={carta.imagen}
                                    text={carta.texto}
                                    url={carta.url} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Cartas;