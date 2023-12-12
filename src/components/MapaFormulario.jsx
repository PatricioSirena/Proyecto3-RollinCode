import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

const MapaFormulario = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
    });

    const enviarConsulta = () => {
        Toast.fire({
            icon: "success",
            title: "Mensaje enviado con exito"
        });
    }

    return (
        <Container fluid className="footerMapa">
            <Row>
                <Col lg={6} className="map text-center">
                    <h3 className="tituloMapa mb-5 mt-3">Aqui nos podes encontrar</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023709809247!2d-65.20977672520273!3d-26.836696090030664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1693183491247!5m2!1ses-419!2sar"
                        width="300"
                        height="300"
                        id="mapa"
                        style={{ border: '10' }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </Col>
                <Col lg={6} className="align-items-center">
                    <Form className="contact text-center">
                        <h3 className="tituloFormulario mt-3 mb-3">Contáctanos</h3>
                        <p className="parrafoFormulario">Si tenés alguna consulta, podés escribirnos.<br /> La responderemos lo antes posible.</p>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control className="emailFormulario" type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3 formularioMensaje" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" className="mensajeFormulario"/>
                            <Button variant="secondary" className="botonFormulario mt-4" onClick={() => enviarConsulta()}>Enviar</Button>{' '}
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default MapaFormulario