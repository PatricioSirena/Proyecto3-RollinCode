import { useForm } from 'react-hook-form'
import '../styles/administrador.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { methGet, methPost, methGetOne, methUpdate } from '../helpers/index'
// import '../styles/administrador.css'

const AdminMenu = () => {

    const { formState: { errors }, handleSubmit, register, reset } = useForm();
    const [menu, setMenu] = useState([]);
    const [show, setShow] = useState(false);
    const [modalEditar, setModalEditar] = useState(false)
    const [platoSeleccionado, setPlatoSeleccionado] = useState({
        id: '',
        titulo: '',
        precio: '',
        texto: '',
        categoria: '',
        activo: '',
        imagen: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => { reset(); setShow(true); }

    useEffect(() => {
        methGet()
            .then((datos) => { return datos.data })
            .then((response) => {
                if (response.length != 0) {
                    setMenu(response)
                } else {
                    console.log('No llegaron datos');
                }
            })
    }, [])

    const insertar = (plato) => {
        plato.id = menu.length + 1;
        setMenu([...menu, plato]);
    }

    const onSubmit = handleSubmit((data) => {
        insertar(data)
        methPost(data),
            handleClose()

    })

    const seleccionarPlato = (plato, caso) => {
        reset()
        methGetOne(plato.id)
        .then((datos)=>{return datos.data})
        .then((response)=> setPlatoSeleccionado(response))
        console.log(platoSeleccionado);
        (caso === 'Editar') && setModalEditar(true)
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
        // setMenu(menuNuevo);
        methUpdate(platoSeleccionado, platoSeleccionado.id);
        setModalEditar(false)
        window.location.replace('');
    }

    return (
        <>
            <div className='w-100 text-center'>
                <Button variant="primary" onClick={handleShow}>
                    Agregar Plato
                </Button>
            </div>

            <Modal
                show={show}
                // onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='modalInsertar'
            >
                <div className='text-center m-3'>
                    <h5>Agregar Plato</h5>
                </div>
                <div className='agregarPlato'>
                    <form onSubmit={onSubmit}>
                        {/* {id} */}
                        {/* <label htmlFor="id">ID</label>
                        <input
                            className='form-control'
                            name='id'
                            type="text"
                            readOnly
                        /> */}
                        {/* {Nombre} */}
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

                        {/* {Precio} */}
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
                        {/* {Descripcion} */}
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
                        />
                        {errors.texto && <span>{errors.texto.message}</span>}
                        {/* {Categoria} */}
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
                        {/* {imagen} */}
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
                        />
                        {errors.imagen && <span>{errors.imagen.message}</span>}
                        {/* {Activo} */}
                        <div className='platoActivo'>
                            <label htmlFor="activo">Publicar Plato</label>
                            <input
                                {...register('activo')}
                                // className='form-control'
                                type="checkbox"
                                name='platoActivo'
                            />
                        </div>

                        <div className='botones'>
                            <button className='btn btn-dark' type='submit'>Guardar</button>
                            <button className='btn btn-dark' onClick={handleClose}>Cancelar</button>

                        </div>

                    </form>
                </div>
            </Modal>

            <Modal
                show={modalEditar}
                onHide={() => setModalEditar(false)}
                backdrop="static"
                keyboard={false}
                className='modalEditar'
            >
                <div className='text-center m-3'>
                    <h5>Editar Plato</h5>
                </div>
                <div className='agregarPlato'>
                    <form onSubmit={onSubmit}>
                        {/* {id} */}
                        <label htmlFor="id">ID</label>
                        <input
                            className='form-control'
                            name='id'
                            type="text"
                            readOnly
                            value={platoSeleccionado && platoSeleccionado.id}
                        />
                        {/* {Nombre} */}
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

                        {/* {Precio} */}
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
                        {/* {Descripcion} */}
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
                        {/* {Categoria} */}
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
                        {/* {imagen} */}
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
                        {/* {Activo} */}
                        <div className='platoActivo'>
                            <label htmlFor="activo">Publicar Plato</label>
                            <input
                                {...register('activo')}
                                // className='form-control'
                                type="checkbox"
                                name='activo'
                                value={platoSeleccionado && platoSeleccionado.activo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='botones'>
                            <button className='btn btn-dark' onClick={()=>editar()}>Actualizar</button>
                            <button className='btn btn-dark' onClick={() => setModalEditar(false)}>Cancelar</button>

                        </div>

                    </form>
                </div>
            </Modal>

            <table className='container table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
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
                            <tr key={plato.id}>
                                <td>{plato.id}</td>
                                <td>{plato.titulo}</td>
                                <td>{plato.precio}</td>
                                <td>{plato.texto}</td>
                                <td>{plato.categoria}</td>
                                <td>{plato.activo ? 'Publicado' : 'No publicado'}</td>
                                <td className='text-center'>
                                    <button className='btn btn-dark' onClick={() => seleccionarPlato(plato, 'Editar')}>Editar</button>
                                    <button className='btn btn-primary'>Eliminar</button>
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