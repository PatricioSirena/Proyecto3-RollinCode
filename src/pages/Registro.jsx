// import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { methPostUsers, register } from '../helpers/index'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Registro = () => {
    // const [datosEnviados, cambiarDatosEnviados] = useState(false);
    return (
        <>
            <Formik
                initialValues={{
                    usuario: '',
                    correo: '',
                    password: ''
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

                    if (!valores.password) {
                        errores.password = 'Por favor ingrese la contraseña.'
                    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.password)) {
                        errores.password = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    register(valores)
                        .then(data => {
                            if (data.length === 0) {
                                methPostUsers(valores);
                                resetForm();
                                Swal.fire('Te registraste con exito!!')
                                return window.location = "/login"
                            } else {
                                Swal.fire(`Ya existe el usuario ${valores.usuario}`)
                            }
                        })
                    // cambiarDatosEnviados(true);
                    // setTimeout(() => cambiarDatosEnviados(false), 5000)
                }}
            >
                {({ errors }) => (
                    <div className="row">
                        <Container className='wrapper'>
                            <div className="circle"></div>
                            <div className="circle"></div>
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
                                    <button type="submit" className="btn">Registrarme</button>
                                    {/* {datosEnviados && <p className="usuarioRegistrado">Te registraste con éxito!</p>} */}
                                    <Col className="sign-link">
                                        <p>Ya tienes una cuenta? <Link to={"/Login"} className="signUp-link">Inicia Sesión</Link></p>
                                    </Col>
                                </Form>
                            </Col>
                        </Container>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default Registro

