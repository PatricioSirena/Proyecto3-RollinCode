import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoPagina from "../img/logonuevo.jpg";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Redes = () => {
    return (
        <Container fluid className="footerRedes mb-3">
            <Row>
                <Col lg={4} className="p-1 mt-5 sm text-center accesoRedes">
                    <h5>Seguinos en:</h5>
                    <ul className="iconosRedes">
                        <li>
                            <a className="iconoRedes" href="#!"><FaInstagram /></a>
                        </li>
                        <li>
                            <a className="iconoRedes" href="#!"><FaFacebook /></a>
                        </li>
                        <li>
                            <a className="iconoRedes" href="#!"><FaYoutube /></a>
                        </li>
                    </ul>
                </Col>
                <Col lg={4} className="p-1 text-center">
                    <a href="#promo">
                    <img src={logoPagina} className="logoFooter" alt="" />
                    </a>
                </Col>
                <Col lg={4} className="p-1  text-center listaFooter">
                    <h5 className="link_titulo mb-3">Mas contenido</h5>
                    <ul className="listaLink">
                        <li><NavLink className="links" to='/about'>Acerca de nosotros</NavLink></li>
                        <li><NavLink className="links" to='/error404'>Acerca de nosotros</NavLink></li>
                        <li><NavLink className="links" to='/error404'>Acerca de nosotros</NavLink></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Redes