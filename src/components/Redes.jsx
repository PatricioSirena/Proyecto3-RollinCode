import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoPagina from "../img/logonuevo.jpg";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";



const Redes = () => {
    return (
        <Container fluid className="footerRedes mb-3">
            <Row>
                <Col lg={4} md={4} className="p-1 mt-5 sm text-center accesoRedes">
                    <h5>Seguinos en:</h5>
                    <ul className="iconosRedes">
                        <li>
                            <a className="iconoRedes" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        </li>
                        <li>
                            <a className="iconoRedes" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
                        </li>
                        <li>
                            <a className="iconoRedes" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
                        </li>
                    </ul>
                </Col>
                <Col lg={4} md={4} className="p-1 text-center">
                    <Link to={'/'}>
                    <img src={logoPagina} className="logoFooter" alt="" />
                    </Link>
                </Col>
                <Col lg={4} md={4} className="p-1  text-center listaFooter">
                    <h5 className="link_titulo mb-3">Mas contenido</h5>
                    <ul className="listaLink">
                        <li><NavLink className="links" to='/about'>Acerca de nosotros</NavLink></li>
                        <li><NavLink className="links" to='https://reprocann.msal.gob.ar/' target="_blank">Acceso a Reprocann!</NavLink></li>
                        <li><NavLink className="links" to='/error404'>Growshops cercanos!</NavLink></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Redes