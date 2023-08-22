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
