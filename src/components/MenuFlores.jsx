import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import flores from "../flores.json";

const MenuFlores = () => {
    return (
        <div className="text-center">
            <h2 className="mb-5">Menu de Flores</h2>
            <Container>
                <Row>
                    {
                        flores.map((flor) => (
                            <Col xs={12} md={6} xl={4} xxl={4} className="mb-5" key={flor.id}>
                                <PlatosMenu
                                    id={flor.id}
                                    titulo={flor.titulo}
                                    imgSource={flor.imagen}
                                    text={flor.texto}
                                    precio={flor.precio} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MenuFlores