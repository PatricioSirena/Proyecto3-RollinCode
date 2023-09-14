import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
    const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    usuario: '',
                    contraseña: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese el usuario.'
                    } else if (!/^[A-Za-z0-9]+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros.'
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
                    console.log(usuarioRegistrado);
                    cambiarDatosEnviados(true);
                    setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
            >
                {({ errors }) => (
                
                    <Row>
                        <Container className='wrapper'>
                            <Col className="form-wrapper sign-in col-sm ">
                                <Form className='loginForm text-center'>
                                    <p className="tittle">Inicie Sesión</p>
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
                                        <a class="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</a>
                                    </Col>
                                    <button type="submit" class="button ">
                                    Iniciar Sesión
                                        <div class="hoverEffect">
                                            <div>
                                            </div>  
                                        </div>
                                    </button>
                                    
                                    {datosEnviados && <p className="usuarioRegistrado">Te registraste con éxito!</p>}
                                    <Col className="sign-link">
                                        <p>No tienes una cuenta? <a href="Registro.jsx" class="signUp-link">Regístrate</a></p>
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

export default Login


/*<input type="checkbox" id="flip"></input>
                        <Row>
                            <Col className="cover">
                                <Col className="front">
                                <img className='h-25' src={imagen} alt="" />
                                <Col className="text">
                                <span className="text-1">Bienvenido! <br /> A Happy Food</span>
                                <span className="text-2">Conectémonos</span>
                            </Col>  
                        </Col>
                    </Col>
                    <Col className="forms">
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
                            <button type="submit" className="btn btn-dark mt-3 mb-5 w-50" >Iniciar Sesión</button>
                            {datosEnviados && <p className="usuarioRegistrado">Te registraste con exito!</p>}
                            <div className='d-flex justify-content-center'>
                                <a href="#!"><p>Has olvidado tu contraseña?</p></a>
                            </div>
                        </Form>
                    </Col>
                </Row>
                
                
                
                 {/* <input type="submit" value="Login" class="btn solid" />
                                            <p className="social-text">Or Sign in with social platforms</p>
                                            <Col className="social-media">
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-google"></i>
                                                </a>
                                                <a href="#" class="social-icon">
                                                    <i class="fab fa-linkedin-in"></i>
                                            </a>*/