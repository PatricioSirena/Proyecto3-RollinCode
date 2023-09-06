// import React, { useState } from 'react'
// import { Button, FormControl, FormGroup } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'
// import { useForm } from 'react-hook-form'
// import { ingresar } from '../helpers/index'
// import Swal from 'sweetalert2'
// import { Navigate } from 'react-router-dom'
// const Login = ({ admin, setAdmin, MyUser, setUser, setIslogueado, logueado }) => {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();

//     const onSubmit = (user) => {
//         ingresar(user)
//             .then(data => {
//                 if (data.length == 0) {
//                     Swal.fire('¡Usuario o contraseña incorrecto!')
//                 } else {
//                     let { admin, firstName, lastName, email, id } = data[0];
//                     setUser(data[0])
//                     setAdmin(data[0].admin)
//                     setIslogueado(true)
//                     window.localStorage.setItem("user", JSON.stringify({ admin, firstName, lastName, email, id }))
//                 }
//             })

//     }
//     return (
//         <div>
//             {logueado ? <Navigate to="/products" /> :
//                 <Form className='w-50 bg-info p-3 bg-opacity-25' onSubmit={handleSubmit(onSubmit)}>
//                     <FormGroup>
//                         <Form.Label>Email</Form.Label>
//                         <FormControl
//                             type='email'
//                             {...register("email", {
//                                 required: "Hay que llenar el campo email es obligatorio",
//                                 pattern: {
//                                     value: /^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/,
//                                     message: "El formato del email es incorrecto!"
//                                 }
//                             })}

//                         />
//                         <Form.Text className="text-danger">
//                             {errors.email?.message}
//                         </Form.Text>

//                     </FormGroup>
//                     <FormGroup>
//                         <Form.Label>Contraseña</Form.Label>
//                         <FormControl
//                             type='password'
//                             {...register("password", {
//                                 required: "hay que llenar el campo de la contraseña!",
//                                 pattern: {
//                                     value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
//                                     message: "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito númerico, al menos una minúscula y al menos una mayúscula."
//                                 }
//                             })}

//                         />
//                         <Form.Text className="text-danger">
//                             {errors.password?.message}
//                         </Form.Text>
//                     </FormGroup>
//                     <FormGroup>
//                         <Button type='submit'>Ingresar</Button>
//                     </FormGroup>

//                 </Form>
//             }

//         </div>
//     )
// }

// export default Login


// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import { Navigate } from 'react-router-dom'
// import Home from "./Home";

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Enviar los datos de inicio de sesión al servidor.
//         console.log('');
//         if (username === "admin" && password === "password") {
//             <Navigate to={<Home/>}/>
//             // Redirigir al usuario a la página de inicio.
//         } else {
//             // Mostrar un mensaje de error.
//         }
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Nombre de usuario</Form.Label>
//                 <Form.Control
//                     type="text"
//                     placeholder="Introduzca su nombre de usuario"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Contraseña</Form.Label>
//                 <Form.Control
//                     type="password"
//                     placeholder="Introduzca su contraseña"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Iniciar sesión
//             </Button>
//         </Form>
//     );
// };

// export default Login;
import { Formik } from "formik";
import '../estilos/login.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from "../assets/img/portada.jpg";

const Login = () => {
    return (
        <>
            <Formik
                initialValues={{
                    usuario: '',
                    contraseña: ''
                }}
                validate={(valores) =>{
                    let errores = {};

                    if (!valores.usuario){
                        errores.usuario = 'Por favor ingresar el usuario.'
                    } else if (!/^[A-Za-z0-9]+$/g.test(valores.usuario)) {
                        errores.usuario = 'El usuario solo puede tener letras y numeros.'
                    }
                    
                    if (!valores.contraseña){
                        errores.contraseña = 'Por favor ingresar la contraseña.'
                    } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g.test(valores.contraseña)){
                        errores.contraseña = 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                    }

                    return errores;
                }}
                onSubmit={(valores) => {
                    console.log(valores);
                    console.log('Formulario enviado');
                }}
            >
                {({handleSubmit, values, handleChange, handleBlur, errors}) => (
                    <Container className='containerLogin'>
                        <Row>
                            <Col>
                                <img className='h-25' src={imagen} alt="" />
                                <div className='d-flex justify-content-around'>
                                    <p>No tenes cuenta?</p>
                                    <button className='btn btn-dark'>Click aqui</button>
                                </div>
                            </Col>
                            <Col>
                                <form className='formulario text-center' onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="usuario">Usuario</label>
                                        <br />
                                        <input
                                            id="usuario"
                                            type="text"
                                            name="usuario"
                                            placeholder="Usuario" 
                                            value={values.usuario}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            />
                                            {errors.usuario && <div className="error">{errors.usuario}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="contraseña">Contraseña</label>
                                        <br />
                                        <input
                                            id="contraseña"
                                            type="password"
                                            name="contraseña"
                                            placeholder="Contraseña"
                                            value={values.contraseña} 
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            />
                                            {errors.contraseña && <div className="error">{errors.contraseña}</div>}
                                    </div>
                                    <button type="submit" className="btn btn-dark mt-3 mb-5 w-50" >Ingresar</button>
                                    <div className='d-flex justify-content-center'>
                                        <p>Olvidaste tu contraseña?</p>
                                        <a href="#!">Click Here</a>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                )}
            </Formik>
        </>
    )
}

export default Login