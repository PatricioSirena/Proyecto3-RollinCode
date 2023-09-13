import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import menu from "../menu.json";

const MenuBebidas = () => {
    const bebidas = menu.filter((item) => item.categoria === "bebida");
    return (
        <div id="menuBebidas" className="text-center">
            <h2 className="mb-5">Menu de Bebidas</h2>
            <Container>
                <Row>
                    {
                        bebidas.map((bebida) => (
                            <Col xs={12} md={6} xl={4} xxl={4} className="mb-5" key={bebida.id}>
                                <PlatosMenu
                                    id={bebida.id}
                                    titulo={bebida.titulo}
                                    imgSource={bebida.imagen}
                                    text={bebida.texto}
                                    precio={bebida.precio} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MenuBebidas