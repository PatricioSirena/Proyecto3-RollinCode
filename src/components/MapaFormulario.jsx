import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaFormulario = () => {
    return (
        <Container fluid className="footerMapa">
            <Row>
                <Col lg={6} className="map text-center sm">
                    <h3 className="mb-3 mt-3">Aqui nos podes encontrar</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023709809247!2d-65.20977672520273!3d-26.836696090030664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1693183491247!5m2!1ses-419!2sar"
                        width="300"
                        height="300"
                        id="mapita"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </Col>
                <Col lg={6} className="sm align-items-center">
                    <Form className="contact">
                        <h3 className="mt-3">Contáctanos</h3>
                        <p>Si tenés alguna consulta, podés escribirnos.<br/> La responderemos lo antes posible.</p>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            <Button variant="secondary" className="boton">Enviar</Button>{' '}
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MapaFormulario