import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from "../assets/img/portada.jpg";
import { methPost } from '../helpers/index'

const Registro = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    admin: false,
                    usuario: '',
                    correo: '',
                    contraseña: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese el usuario.'
                    } else if (!/^[A-Za-z0-9]+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros.'
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
                    console.log('Formulario enviado');
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
                                        type="email"
                                        name="contraseña"
                                        placeholder="Contraseña"
                                    />
                                    <label htmlFor="contraseña"></label>
                                    <ErrorMessage name="contraseña" component={() => (
                                    <div className="error text-center">{errors.contraseña}</div>
                                    )} />
                                </Col>  
                                <Col className="forgot-pass">
                                    <a class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</a>
                                </Col>
                                <button type="submit" class="btn">Registrarme</button>
                                {datosEnviados && <p className="usuarioRegistrado">Te registraste con éxito!</p>}
                                <Col className="sign-link">
                                    <p>Ya tienes una cuenta? <a href="Login.jsx" class="signUp-link">Inicia Sesión</a></p>
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

/*<Container className='containerRegistro'>
                        <Row>
                            <Col className="colImagen">
                                <img className='h-25' src={imagen} alt="" />
                                <div className='d-flex justify-content-around'>
                                    <p>Ya tienes una cuenta?</p>
                                    <button className='btn btn-dark'>Inicia Sesión</button>
                                </div>
                            </Col>
                            <Col className="colFormulario">
                                <Form className='formulario text-center'>
                                    <div>
                                        <label htmlFor="usuario">Usuario</label>
                                        <br />
                                        <Field
                                            id="usuario"
                                            type="text"
                                            name="usuario"
                                            placeholder="Introduce tu usuario"
                                        />
                                        <ErrorMessage name="usuario" component={() => (
                                            <div className="error">{errors.usuario}</div>
                                        )} />
                                    </div>
                                    <div>
                                        <label htmlFor="correo">Email</label>
                                        <br />
                                        <Field
                                            id="correo"
                                            type="text"
                                            name="correo"
                                            placeholder="Introduce tu email"
                                        />
                                        <ErrorMessage name="correo" component={() => (
                                            <div className="error">{errors.correo}</div>
                                        )} />
                                    </div>
                                    <div>
                                        <label htmlFor="contraseña">Contraseña</label>
                                        <br />
                                        <Field
                                            id="contraseña"
                                            type="password"
                                            name="contraseña"
                                            placeholder="Introduce tu contraseña"
                                        />
                                        <ErrorMessage name="contraseña" component={() => (
                                            <div className="error">{errors.contraseña}</div>
                                        )} />
                                    </div>
                                    <button type="submit" className="btn btn-dark mt-3 mb-5 w-50" >Registrarme</button>
                                    {datosEnviados && <p className="usuarioRegistrado">Te registraste con exito!</p>}
                                </Form>
                            </Col>
                        </Row>
                    </Container>
 */