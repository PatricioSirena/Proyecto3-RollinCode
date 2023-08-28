import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaFormulario = () => {
    return (
        <Container className="footerMapa">
            <Row>
                <Col className="text-center">
                    <h2 className="mb-3">Aqui nos podes encontrar</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023709809247!2d-65.20977672520273!3d-26.836696090030664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1693183491247!5m2!1ses-419!2sar"
                        width="300"
                        height="300"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </Col>
                <Col>
                    <div className="contact_form">

                        <div className="formulario">
                            <h2>Formulario de contacto</h2>
                            <p>Escríbenos y en breve los pondremos en contacto contigo</p>


                            <form action="submeter-formulario.php" method="post">

                                <p>
                                    <label htmlFor="email" className="colocar_email mt-3">Email*</label>
                                    <br />
                                    <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email" />
                                </p>

                                <p>
                                    <label htmlFor="mensaje" className="colocar_mensaje">Mensaje*</label>
                                    <br />
                                    <textarea name="introducir_mensaje" className="texto_mensaje mb-3" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea>
                                </p>

                                <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                                <p className="aviso">
                                    <span className="obligatorio"> * </span>los campos son obligatorios.
                                </p>

                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MapaFormulario