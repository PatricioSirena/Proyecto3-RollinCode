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
            {isLogueado ? <Navigate to="/" />
                :
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
                        ingresar(user)
                            .then(response => {return response})
                                .then(data => {
                                    console.log(data);
                                if (data.length === 0) {
                                    Swal.fire('Usuario o Contraseña incorrectos')
                                }else if (data[0].activo === false) {
                                    Swal.fire('Debe esperar que un administrador autorice su ingreso')
                                } else {
                                    let { admin, correo, id } = data[0];
                                    setUser(data[0])
                                    setAdmin(data[0].admin)
                                    setIslogueado(true)
                                    window.localStorage.setItem("user", JSON.stringify({ admin, correo, id }));
                                    Toast.fire({
                                        icon: 'success',
                                        title: 'Logueado con exito, redirigiendo a inicio!'
                                    })
                                    setTimeout(() => {
                                        <Navigate to="/" />
                                    }, 1500);
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
            }

        </>
    )
}

export default Login
