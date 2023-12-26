import { Col, Container, Row } from "react-bootstrap";
import Carta from "./Carta";
import imagen1 from "../img/MenuComida.jpg";
import imagen2 from "../img/MenuBebida.jpg";
import imagen3 from "../img/MenuFlores.jpg";
import '../styles/index.css'

const cartas = [
    {
        id: 1,
        titulo: 'Comidas',
        imagen: imagen1,
        texto: 'Para bajonear',
        url: '/menu'
    },
    {
        id: 2,
        titulo: 'Bebidas',
        imagen: imagen2,
        texto: 'Para refrescarte',
        url: '/menu'
    },
    {
        id: 3,
        titulo: 'Flores',
        imagen: imagen3,
        texto: 'Para disfrutar',
        url: '/menu'
    }
]

const Cartas = () => {
    return (
        <>
            <Container className="containerCartas text-center">
                    <h1 className="spoiler animate__zoomInLeft">Dejate Tentar...</h1>
                <Row className="rowCartas">
                    {
                        cartas.map((carta) => (
                            <Col sm={12} md={4} lg={4} key={carta.id}>
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