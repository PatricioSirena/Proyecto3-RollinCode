// import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import '../styles/login.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { methPostUsers, register } from '../helpers/index'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Registro = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    correo: '',
                    password: ''
                    // admin: false,
                    // activo: false
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.nombre) {
                        errores.nombre = 'Por favor ingrese el nombre.'
                    }

                    if (!valores.apellido) {
                        errores.apellido = 'Por favor ingrese el apellido.'
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
                    console.log(valores);
                    register(valores)
                        .then(data => {
                            console.log(data);
                            if (data.length === 0) {
                                methPostUsers(valores);
                                resetForm();
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Te registraste con exito, redirigiendo al login'
                                })
                                setTimeout(() => {
                                    // return window.location = "/login"
                                }, 2000);
                            } else {
                                Swal.fire(`Ya existe el usuario ${valores.correo}`)
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
                                    <p className="tittle">Regístrate</p>
                                    <Col className="input-group">
                                        <Field
                                            id="nombre"
                                            type="text"
                                            name="nombre"
                                            placeholder="nombre"
                                        />
                                        <label htmlFor="nombre"></label>
                                        <ErrorMessage name="nombre" component={() => (
                                            <div className="error">{errors.nombre}</div>
                                        )} />
                                    </Col>

                                    <Col className="input-group">
                                        <Field
                                            id="apellido"
                                            type="text"
                                            name="apellido"
                                            placeholder="apellido"
                                        />
                                        <label htmlFor="apellido"></label>
                                        <ErrorMessage name="apellido" component={() => (
                                            <div className="error">{errors.apellido}</div>
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
                                        <p>Ya tienes una cuenta? <Link to={"/login"} className="signUp-link">Inicia Sesión</Link></p>
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

