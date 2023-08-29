import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoPagina from "../assets/img/logo-pagina.jpg";


const Redes = () => {
    return (
        <Container fluid className="footerRedes">
            <Row>
                <Col className="p-5 mt-5 text-center accesoRedes">
                    <h5>Seguinos en:</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Col>
                <Col className="p-5 text-center">
                    <img src={logoPagina} className="logoFooter" alt="" />
                </Col>
                <Col className="p-5 text-center listaFooter">
                    <h5>Titulo de lista a ninguna parte</h5>
                    <ul>
                        <li>Link a ninguna parte</li>
                        <li>Link a ninguna parte</li>
                        <li>Link a ninguna parte</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Redes