import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, Navigate } from "react-router-dom";
import { ingresar } from '../helpers/index'
import Swal from "sweetalert2";

const Login = ({ setAdmin, setUser, setIslogueado, isLogueado }) => {

    return (
        <>
            {isLogueado ? <Navigate to="/" />
                :
                <Formik
                    initialValues={{
                        correo: '',
                        password: ''
                    }}
                    validate={(valores) => {
                        let errores = {};

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

                    onSubmit={(user) => {
                        ingresar(user)
                            .then(data => {
                                if (data === 401) {
                                    Swal.fire('Usuario o Contraseña incorrectos')
                                } else if (data === 404) {
                                    Swal.fire('Usuario inexistente')
                                } else if (data.user.activo === false) {
                                    Swal.fire('Debe esperar que un administrador autorice su ingreso')
                                } else {
                                    let { admin, correo, uid } = data.user;
                                    let token = data.token;
                                    // <Navigate to="/" />
                                    setUser(data.user)
                                    setAdmin(data.user.admin)
                                    window.localStorage.setItem("user", JSON.stringify({ admin, correo, uid }));
                                    window.localStorage.setItem("token", JSON.stringify(token));
                                    setIslogueado(true);
                                }
                            })
                    }}
                >
                    {({ errors }) => (
                        <div className="formLogin">
                            <Container className='wrapper'>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <Col className="form-wrapper sign-in col-sm ">
                                    <Form className='loginForm text-center'>
                                        <p className="tittle">Inicie Sesión</p>
                                        <Col className="input-group">
                                            <Field
                                                id="correo"
                                                type="text"
                                                name="correo"
                                                placeholder="Correo"
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
                                                placeholder="Contraseña"
                                            />
                                            <label htmlFor="password"></label>
                                            <ErrorMessage name="password" component={() => (
                                                <div className="error text-center">{errors.password}</div>
                                            )} />
                                        </Col>
                                        <Col className="forgot-pass text-center">
                                            <Link to="/" className="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</Link>
                                        </Col>
                                        <button type="submit" className="botonInicio">Iniciar Sesión</button>
                                        <Col className="sign-link">
                                            <p>No tienes una cuenta? <Link to={"/registro"} className="signUp-link">Regístrate</Link></p>
                                        </Col>
                                    </Form>
                                </Col>
                            </Container>
                        </div>
                    )}
                </Formik >
            }
        </>
    )
}

export default Login
