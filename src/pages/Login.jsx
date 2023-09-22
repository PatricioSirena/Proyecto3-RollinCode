import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import {ingresar} from '../helpers/index'

const Login = () => {
    // const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    usuario: '',
                    password: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese el usuario.'
                    } else if (!/^[A-Za-z0-9]{4,20}\S+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros.'
                    }

                    if (!valores.password) {
                        errores.password = 'Por favor ingrese la contraseña.'
                    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.password)) {
                        errores.password = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                    }

                    return errores;
                }}
                onSubmit={(user) => {
                    // let usuarioRegistrado = valores;
                    ingresar(user)
                    .then(data => {console.log(data);
                    if (data.length == 0){
                        alert('Usuario o Contraseña incorrectos')
                        // resetForm();
                        // cambiarDatosEnviados(true);
                        // setTimeout(() => cambiarDatosEnviados(false), 5000)
                    } else{
                        window.location='/'
                    }
                })
                }}
            >
                {({ errors }) => (
                    <div className="row">
                    <Container className='wrapper'>
                        <div className="circle"></div>
                        <div className="circle"></div>
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
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="contraseña"
                                    />
                                    <label htmlFor="password"></label>
                                    <ErrorMessage name="password" component={() => (
                                        <div className="error text-center">{errors.password}</div>
                                    )} />
                                </Col>
                                <Col className="forgot-pass text-center">
                                    <a className="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</a>
                                </Col>
                                <button type="submit" className="btn">Iniciar Sesión</button>
                                <Col className="sign-link">
                                    <p>No tienes una cuenta? <Link to={"/Registro"} className="signUp-link">Regístrate</Link></p>
                                </Col>
                            </Form>
                        </Col>
                    </Container>
                    </div>
                )}
            </Formik >
        </>
    )
}

export default Login
