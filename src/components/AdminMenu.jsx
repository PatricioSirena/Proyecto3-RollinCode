import { useForm } from 'react-hook-form'
import '../styles/administrador.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { methGet, methPost, methGetOne, methUpdate, methDeleteOne } from '../helpers/index'
import Swal from "sweetalert2";

const AdminMenu = () => {

    const { formState: { errors }, handleSubmit, register, reset } = useForm();
    const [menu, setMenu] = useState([]);
    const [show, setShow] = useState(false);
    const [modalEditar, setModalEditar] = useState(false)
    const [modalEliminar, setModalEliminar] = useState(false)
    const [platoSeleccionado, setPlatoSeleccionado] = useState({})

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })

    const handleClose = () => setShow(false);
    const handleShow = () => { reset(); setShow(true); }

    useEffect(() => {
        methGet()
            .then((datos) => { return datos.data.data })
            .then((response) => {
                if (response.length != 0) {
                    setMenu(response)
                } else {
                    console.log('No llegaron datos');
                }
            })
    }, [])

    const onSubmit = handleSubmit((data) => {
        setMenu([...menu, data]);
        Toast.fire({
            icon: 'success',
            title: 'Plato agregado con exito!'
        })
        methPost(data);
        handleClose();
        setTimeout(() => {
            window.location = "/admin";
        }, 2000);
    })

    const seleccionarPlato = (plato, caso) => {
        setPlatoSeleccionado({})
        reset()
        methGetOne(plato.id)
            .then((datos) => { return datos.data.producto })
            .then((response) => setPlatoSeleccionado(response));
        (caso === 'Editar') && setModalEditar(true);
        (caso === 'Eliminar') && setModalEliminar(true);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setPlatoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const editar = () => {
        menu.map((plato) => {
            if ((plato.id === platoSeleccionado.id)) {
                plato.titulo === platoSeleccionado.titulo
                plato.precio === platoSeleccionado.precio
                plato.texto === platoSeleccionado.texto
                plato.categoria === platoSeleccionado.categoria
                plato.activo === platoSeleccionado.activo
                plato.imagen === platoSeleccionado.imagen
            }
        });
        Toast.fire({
            icon: 'success',
            title: 'Plato editado con exito!'
        })
        methUpdate(platoSeleccionado.id, platoSeleccionado);
        setModalEditar(false)
        setTimeout(() => {
            window.location = "/admin";
        }, 2000);
    }

    const cambiarActivo = (plato) => {
        methGetOne(plato.id)
            .then((datos) => { return datos.data.producto })
            .then((response) => {
                if (response.activo === false) {
                    response.activo = true;
                } else {
                    response.activo = false;
                }
                Toast.fire({
                    icon: 'success',
                    title: 'Plato editado con exito!'
                })
                methUpdate(response.id, response);
            })
        setTimeout(() => {
            window.location = '/admin'
        }, 2000);
    }

    const eliminar = () => {
        setModalEliminar(false)
        Toast.fire({
            icon: 'success',
            title: 'Plato eliminado con exito!'
        })
        methDeleteOne(platoSeleccionado.id);
        setTimeout(() => {
            window.location.replace('');
        }, 2000);
    }

    return (
        <>
            <div className='w-100 text-center'>
                <Button onClick={handleShow}>
                    Agregar Plato
                </Button>
            </div>

            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
                className='modalInsertar'
            >
                <div className='text-center m-3'>
                    <h5>Agregar Plato</h5>
                </div>
                <div className='agregarPlato'>
                    <form onSubmit={onSubmit}>

                        <label htmlFor='titulo'>Nombre</label>
                        <input
                            {...register('titulo', {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                },
                                pattern: {
                                    value: /^.{4,20}$/,
                                    message: 'Solo letras y numeros, entre 4 y 20 caracteres.'
                                }
                            }
                            )}
                            className='form-control'
                            name='titulo'
                            type="text"
                        />
                        {errors.titulo && <span>{errors.titulo.message}</span>}

                        <label htmlFor="precio">Precio</label>
                        <input
                            {...register('precio', {
                                required: {
                                    value: true,
                                    message: "El precio es requerido"
                                },
                                pattern: {
                                    value: /^[0-9]+(.[0-9]+)?$/,
                                    message: 'Solo numeros con hasta dos decimales.'
                                }
                            }
                            )}
                            className='form-control'
                            type="text"
                            name='precio'
                        />
                        {errors.precio && <span>{errors.precio.message}</span>}

                        <label htmlFor="texto">Descripción</label>
                        <input
                            {...register('texto', {
                                required: {
                                    value: true,
                                    message: "La descripción es requerida"
                                },
                                pattern: {
                                    value: /^.{4,100}$/,
                                    message: 'Solo letras y numeros, hasta 50 caracteres.'
                                }
                            }
                            )}
                            className='form-control'
                            type="text"
                            name='texto'
                        />
                        {errors.texto && <span>{errors.texto.message}</span>}

                        <label htmlFor="categoria">Categoria</label>
                        <select
                            {...register('categoria', {
                                required: {
                                    value: true,
                                    message: "La categoria es requerida"
                                }
                            }
                            )}
                            className='form-control'
                            name='categoria'
                        >
                            <option value="comida">Comida</option>
                            <option value="bebida">Bebida</option>
                            <option value="flor">Flor</option>
                        </select>
                        {errors.categoria && <span>{errors.categoria.message}</span>}

                        <label htmlFor="imagen">URL Imagen</label>
                        <input
                            {...register('imagen', {
                                required: {
                                    value: true,
                                    message: "La imagen es requerida"
                                }
                            })}
                            className='form-control'
                            type="text"
                            name='imagen'
                        />
                        {errors.imagen && <span>{errors.imagen.message}</span>}

                        <div className='platoActivo'>
                            <label htmlFor="activo">Publicar Plato</label>
                            <input
                                {...register('activo')}
                                type="checkbox"
                                name='activo'
                            />
                        </div>

                        <div className='botones'>
                            <button className='btn btn-dark' type='submit'>Guardar</button>
                            <button className='btn btn-secondary' onClick={handleClose}>Cancelar</button>

                        </div>

                    </form>
                </div>
            </Modal>

            <Modal
                show={modalEditar}
                backdrop="static"
                keyboard={false}
                className='modalEditar'
            >
                <div className='text-center m-3'>
                    <h5>Editar Plato</h5>
                </div>
                <div className='agregarPlato'>
                    <form onSubmit={onSubmit}>

                        <label htmlFor='titulo'>Nombre</label>
                        <input
                            {...register('titulo', {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                },
                                pattern: {
                                    value: /^.{4,20}$/,
                                    message: 'Solo letras y numeros, entre 4 y 20 caracteres.'
                                }
                            }
                            )}
                            className='form-control'
                            name='titulo'
                            type="text"
                            value={platoSeleccionado && platoSeleccionado.titulo}
                            onChange={handleChange}
                        />
                        {errors.titulo && <span>{errors.titulo.message}</span>}

                        <label htmlFor="precio">Precio</label>
                        <input
                            {...register('precio', {
                                required: {
                                    value: true,
                                    message: "El precio es requerido"
                                },
                                pattern: {
                                    value: /^[0-9]+(.[0-9]+)?$/,
                                    message: 'Solo numeros con hasta dos decimales.'
                                }
                            }
                            )}
                            className='form-control'
                            type="text"
                            name='precio'
                            value={platoSeleccionado && platoSeleccionado.precio}
                            onChange={handleChange}
                        />
                        {errors.precio && <span>{errors.precio.message}</span>}

                        <label htmlFor="texto">Descripción</label>
                        <input
                            {...register('texto', {
                                required: {
                                    value: true,
                                    message: "La descripción es requerida"
                                },
                                pattern: {
                                    value: /^.{4,50}$/,
                                    message: 'Solo letras y numeros, hasta 50 caracteres.'
                                }
                            }
                            )}
                            className='form-control'
                            type="text"
                            name='texto'
                            value={platoSeleccionado && platoSeleccionado.texto}
                            onChange={handleChange}
                        />
                        {errors.texto && <span>{errors.texto.message}</span>}

                        <label htmlFor="categoria">Categoria</label>
                        <select
                            {...register('categoria', {
                                required: {
                                    value: true,
                                    message: "La categoria es requerida"
                                }
                            }
                            )}
                            className='form-control'
                            name='categoria'
                            value={platoSeleccionado && platoSeleccionado.categoria}
                            onChange={handleChange}
                        >
                            <option value="comida">Comida</option>
                            <option value="bebida">Bebida</option>
                            <option value="flor">Flor</option>
                        </select>
                        {errors.categoria && <span>{errors.categoria.message}</span>}

                        <label htmlFor="imagen">URL Imagen</label>
                        <input
                            {...register('imagen', {
                                required: {
                                    value: true,
                                    message: "La imagen es requerida"
                                }
                            }
                            )}
                            className='form-control'
                            type="text"
                            name='imagen'
                            value={platoSeleccionado && platoSeleccionado.imagen}
                            onChange={handleChange}
                        />
                        {errors.imagen && <span>{errors.imagen.message}</span>}

                        <div className='botones'>
                            <button className='btn btn-dark' onClick={() => editar()}>Actualizar</button>
                            <button className='btn btn-secondary' onClick={() => setModalEditar(false)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal
                show={modalEliminar}
                onHide={() => setModalEliminar(false)}
                backdrop="static"
                keyboard={false}
                className='modalEliminar'
            >
                <div className='text-center m-3'>
                    <h4>Desea eliminar este plato?</h4>
                </div>
                <div className='text-center'>
                    <p>{platoSeleccionado.titulo}</p>
                </div>
                <div className='botonesEliminar d-flex justify-content-center'>
                    <button className='btn btn-danger' onClick={() => eliminar()}>Eliminar</button>
                    <button className='btn btn-secondary' onClick={() => setModalEliminar(false)}>Cancelar</button>
                </div>
            </Modal>

            <table className='container table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Categoria</th>
                        <th>Publicado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map(plato => (
                            <tr className='text-center' key={plato.id}>
                                <td>{plato.titulo}</td>
                                <td>${plato.precio}</td>
                                <td>{plato.texto}</td>
                                <td>{plato.categoria}</td>
                                <td>{plato.activo ? <button className='btn btn-danger' onClick={() => cambiarActivo(plato)}>No Publicar</button>
                                    : <button className='btn btn-dark' onClick={() => cambiarActivo(plato)}>Publicar</button>}</td>
                                <td className='text-center d-flex justify-content-center'>
                                    <button className='btn btn-dark' onClick={() => seleccionarPlato(plato, 'Editar')}>Editar</button>
                                    <button className='btn btn-danger' onClick={() => seleccionarPlato(plato, 'Eliminar')}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminMenu