import { Col, Container, Row } from "react-bootstrap";
import Carta from "./Carta";
// import imagen1 from "../img/burger_1.jpg";
// import imagen2 from "../img/beer.jpg";
// import imagen3 from "../img/0473F1BF-4228-44F3-9CD1-33C159917F1B.jpg";

const cartas = [
    {
        id: 1,
        titulo: 'Burgers',
        // imagen: imagen1,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    },
    {
        id: 2,
        titulo: 'Bebidas',
        // imagen: imagen2,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    },
    {
        id: 3,
        titulo: 'Flores',
        // imagen: imagen3,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    }
]

const Cartas = () => {
    return (
        <>
            <Container fluid className="justify-content-center align-items-center" >
                <Row className="row justify-content-center">
                    <h1 className="spoiler justify-content-center align-items-center animate__zoomInLeft">Spoilers que sí.</h1>
                    {
                        cartas.map((carta) => (
                            <Col lg={3} className="m-4 justify-content-center" key={carta.id}>
                                <div className="col-lg-4 mb-5" key={carta.id}>
                                    <Carta
                                        titulo={carta.titulo}
                                        imgSource={carta.imagen}
                                        text={carta.texto}
                                        url={carta.url} />
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default Cartas;