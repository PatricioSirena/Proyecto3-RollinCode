// import React from 'react'
// import { Button, FormControl, FormGroup } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form'
// import { useForm } from 'react-hook-form'
// import { methPost, methGet } from '../helpers/index'
// import Swal from 'sweetalert2'
// const AddProduct = () => {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm();

//     const addProduct = (product) => {
//         methPost(product)
//         reset();
//         Swal.fire(
//             'Se agregó de manera correcta el producto!',
//             '',
//             'success'
//         )
//         // methGet()

//     }

//     return (
//         <div>
//             <Form className='w-50 bg-info p-3 bg-opacity-25' onSubmit={handleSubmit(addProduct)}>
//                 <FormGroup>
//                     <Form.Label>Nombre del producto</Form.Label>
//                     <FormControl
//                         type='text'
//                         {...register("name", {
//                             required: "este campo es obligatorio"
//                         })}

//                     />
//                     <Form.Text className="text-danger">
//                         {errors.name?.message}
//                     </Form.Text>
//                 </FormGroup>
//                 <FormGroup>
//                     <Form.Label>Descripcción</Form.Label>
//                     <FormControl
//                         type='text'
//                         {...register("descripction", {
//                             required: "Este campo es obligatorio",

//                         })}
//                     />
//                     <Form.Text className="text-danger">
//                         {errors.descripction?.message}
//                     </Form.Text>
//                 </FormGroup>
//                 <FormGroup>
//                     <Form.Label>Precio</Form.Label>
//                     <FormControl
//                         type='text'
//                         {...register("price", {
//                             required: "Este campo es obligatorio",

//                         })}
//                     />
//                     <Form.Text className="text-danger">
//                         {errors.price?.message}
//                     </Form.Text>
//                 </FormGroup>

//                 <FormGroup>
//                     <Form.Label>url Imagen</Form.Label>
//                     <FormControl
//                         type='text'
//                         {...register("src", {
//                             required: "Este campo es obligatorio",

//                         })}
//                     />
//                     <Form.Text className="text-danger">
//                         {errors.src?.message}
//                     </Form.Text>
//                 </FormGroup>
//                 <FormGroup>
//                     <Button type='submit'>Agregar Producto</Button>
//                 </FormGroup>

//             </Form>
//         </div>
//     )
// }

// export default AddProduct