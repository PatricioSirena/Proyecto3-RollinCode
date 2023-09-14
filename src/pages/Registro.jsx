import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { methPost } from '../helpers/index'
import { Link } from "react-router-dom";

const Registro = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    usuario: '',
                    correo: '',
                    contraseña: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese el usuario.'
                    } else if (!/^[A-Za-z0-9]{4,20}\S+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros y debe tener entre 4 y 20 caracteres.'
                    }

                    if (!valores.correo) {
                        errores.correo = 'Por favor ingrese el correo electronico.'
                    } else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g.test(valores.correo)) {
                        errores.correo = 'No es un correo electronico valido.'
                    }

                    if (!valores.contraseña) {
                        errores.contraseña = 'Por favor ingrese la contraseña.'
                    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.contraseña)) {
                        errores.contraseña = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    let usuarioRegistrado = valores;
                    resetForm();
                    methPost(usuarioRegistrado);
                    cambiarDatosEnviados(true);
                    setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
            >
                {({ errors }) => (
                <Row>
                    <Container className='wrapper'>
                        <Col className="form-wrapper sign-in col-sm ">
                            <Form className='loginForm text-center'>
                                <p className="tittle">Regístrate</p>
                                <Col className="input-group">
                                    <Field
                                        id="usuario"
                                        type="text"
                                        name="usuario"
                                        placeholder="Usuario"
                                    />
                                    <label htmlFor="usuario"></label>
                                    <ErrorMessage name="usuario" component={() => (
                                    <div className="error">{errors.usuario}</div>
                                    )} />  
                                </Col>
                                <Col className="input-group">
                                    <Field
                                        id="correo"
                                        type="text"
                                        name="correo"
                                        placeholder="Email"
                                    />
                                    <label htmlFor="correo"></label>
                                    <ErrorMessage name="correo" component={() => (
                                    <div className="error">{errors.correo}</div>
                                    )} />  
                                </Col>
                                <Col className="input-group">
                                    <Field
                                        id="contraseña"
                                        type="password"
                                        name="contraseña"
                                        placeholder="Contraseña"
                                    />
                                    <label htmlFor="contraseña"></label>
                                    <ErrorMessage name="contraseña" component={() => (
                                    <div className="error text-center">{errors.contraseña}</div>
                                    )} />
                                </Col>  
                                <Col className="forgot-pass">
                                    <a className="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</a>
                                </Col>
                                <button type="submit" className="btn">Registrarme</button>
                                {datosEnviados && <p className="usuarioRegistrado">Te registraste con éxito!</p>}
                                <Col className="sign-link">
                                    <p>Ya tienes una cuenta? <Link to={"/Login"} className="signUp-link">Inicia Sesión</Link></p>
                                </Col>                                      
                            </Form>
                        </Col>
                    </Container>
                </Row>
                )}
            </Formik>
        </>
    )
}

export default Registro

