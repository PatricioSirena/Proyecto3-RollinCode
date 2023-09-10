import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import bebidas from "../bebidas.json";

const MenuBebidas = () => {
    return (
        <>
            <h2 className="mb-5">Menu de Bebidas</h2>
            <Container className="container d-flex justify-content-center align-items-center">
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
        </>
    )
}

export default MenuBebidas