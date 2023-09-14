import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import menu from "../menu.json";

const MenuComidas = () => {
    const comidas = menu.filter((item) => item.categoria === "comida");

    return (
        <div className="text-center">
            <h1 className="text-menu mb-5">Burgers</h1>
            <Container>
                <Row>
                    {
                        comidas.map((comida) => (
                            <Col xs={12} md={6} xl={4} xxl={4} className="mb-5" key={comida.id}>
                                <PlatosMenu
                                    id={comida.id}
                                    titulo={comida.titulo}
                                    imgSource={comida.imagen}
                                    text={comida.texto}
                                    precio={comida.precio} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MenuComidas