import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoPagina from "../img/logohappy.jpg";
import {FaInstagram,FaFacebook,FaYoutube} from "react-icons/fa"


const Redes = () => {
    return (
        <Container fluid className="footerRedes">
            <Row>
                <Col className="p-5 mt-5 text-center accesoRedes">
                    <h5>Seguinos en:</h5>
                    <ul className="iconosRedes">
                        <li>
                            <a className="iconoRedes" href="#!">
                                <FaInstagram />                                
                            </a>
                        </li>
                        <li>
                            <a className="iconoRedes" href="#!">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a className="iconoRedes" href="#!">
                                <FaYoutube />
                            </a>
                        </li>
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