import { useParams, Navigate } from 'react-router-dom'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import { methoGetOne, methUpdate, methGet } from '../helpers/index'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
const EditProduct = ({ isLogueado, admin, addProduct }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    let { id } = useParams();
    const [getOne, setGetOne] = useState([])
    const [volver, setVolver] = useState(false)
    useEffect(() => {
        methoGetOne(id)
            .then((response) => response.data)
            .then(data => setGetOne([data]))
    }, [])
    const editProduct = (obj) => {
        methUpdate(obj, id);
        methGet()
            .then((response) => response.data)
            .then(data => {
                addProduct(data)
                setVolver(true)
            })
    }
    return (
        <>
            {volver ? <Navigate to="/products" /> :
                <Form className='w-50 bg-info p-3 bg-opacity-25' onSubmit={handleSubmit(editProduct)}>
                    <FormGroup>
                        <Form.Label>Nombre del producto</Form.Label>
                        <FormControl
                            type='text'
                            {...register("name", {
                                required: "este campo es obligatorio"
                            })}

                        />
                        <Form.Text className="text-danger">
                            {errors.name?.message}
                        </Form.Text>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Descripcción</Form.Label>
                        <FormControl
                            type='text'
                            {...register("description", {
                                required: "Este campo es obligatorio",

                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.description?.message}
                        </Form.Text>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Precio</Form.Label>
                        <FormControl
                            type='text'
                            {...register("price", {
                                required: "Este campo es obligatorio",

                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.price?.message}
                        </Form.Text>
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>url Imagen</Form.Label>
                        <FormControl
                            type='text'
                            {...register("src", {
                                required: "Este campo es obligatorio",

                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.src?.message}
                        </Form.Text>
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit'>Editar Producto</Button>
                    </FormGroup>
                </Form>}

        </>
    )
}

export default EditProduct
