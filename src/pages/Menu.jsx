import { Col, Container, Row } from "react-bootstrap";
import MenuComidas from "../components/MenuComidas";
import Portada from "../components/Portada";
import Footer from "../components/Footer";
import MenuBebidas from "../components/MenuBebidas";
import MenuFlores from "../components/MenuFlores";

const Menu = () => {
    return (
        <>

            <Portada />
            <Container fluid>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={12}/>
                    <Col xl={8} className="text-center">
                        <MenuComidas />
                    </Col>
                    <Col className="text-center" xl={2} lg={2} md={2} sm={12}/>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={12}/>
                    <Col xl={8} className="text-center">
                        <MenuBebidas/>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={12}/>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xl={2} lg={2} md={2} sm={12}/>
                    <Col xl={8} className="text-center">
                        <MenuFlores/>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={12}/>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default Menu