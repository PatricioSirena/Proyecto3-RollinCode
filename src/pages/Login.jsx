import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link, Navigate } from "react-router-dom";
import { ingresar } from '../helpers/index'
import Swal from "sweetalert2";

const Login = ({ admin, setAdmin, MyUser, setUser, setIslogueado, isLogueado }) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        // didOpen: (toast) => {
        //     toast.addEventListener('mouseenter', Swal.stopTimer)
        //     toast.addEventListener('mouseleave', Swal.resumeTimer)
        // }
    })
    
    return (
        <>
            {/* {isLogueado ? <Navigate to="/" />
                : */}
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
                        // console.log(user);
                        ingresar(user)
                            .then(data => {
                                    // console.log(data);
                                if (data.length === 0) {
                                    Swal.fire('Usuario o Contraseña incorrectos')
                                }else if (data.activo === false) {
                                    Swal.fire('Debe esperar que un administrador autorice su ingreso')
                                } else {
                                    let { admin, correo, uid } = data;
                                    setUser(data)
                                    setAdmin(data.admin)
                                    setIslogueado(true)
                                    window.localStorage.setItem("user", JSON.stringify({ admin, correo, uid }));
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'Logueado con exito, redirigiendo a inicio!'
                                    })
                                    // setTimeout(() => {
                                    //     <Navigate to="/" />
                                    // }, 1500);
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
                                                placeholder="contraseña"
                                            />
                                            <label htmlFor="password"></label>
                                            <ErrorMessage name="password" component={() => (
                                                <div className="error text-center">{errors.password}</div>
                                            )} />
                                        </Col>
                                        <Col className="forgot-pass text-center">
                                            <Link to="/" className="boton" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="">Has olvidado tu contraseña?</Link>
                                        </Col>
                                        <button type="submit" className="btn">Iniciar Sesión</button>
                                        <Col className="sign-link">
                                            <p>No tienes una cuenta? <Link to={"/registro"} className="signUp-link">Regístrate</Link></p>
                                        </Col>
                                    </Form>
                                </Col>
                            </Container>
                        </div>
                    )}
                </Formik >
            {/* } */}

        </>
    )
}

export default Login
