import { useForm } from 'react-hook-form'
import '../styles/administrador.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { methGet, methPost } from '../helpers/index'
// import '../styles/administrador.css'

const AdminMenu = () => {

    const { formState: { errors }, handleSubmit, register, reset } = useForm();
    const [menu, setMenu] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => { reset(); setShow(true); }

    useEffect(() => {
        methGet()
            .then((datos) => { return datos.data })
            .then((response) => {
                if (response.length != 0) {
                    setMenu(response)
                    // console.log(response);
                } else {
                    console.log('No llegaron datos');
                }
            })
    }, [])

    const insertar = (plato) => {
        plato.id = menu.length + 1;
        setMenu([...menu, plato]);
    }

    console.log(menu);

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        insertar(data)
        methPost(data),
            handleClose()

    })

    return (
        <>
            <div className='w-100 text-center'>
                <Button variant="primary" onClick={handleShow}>
                    Agregar Plato
                </Button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
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
                        {/* <label htmlFor="id"></label>
                        <input
                            type="text"
                            readOnly
                            value={menu[menu.length - 1].id + 1}

                        /> */}
                        {/* {Nombre} */}
                        <label htmlFor='titulo'>Nombre</label>
                        <input type="text"
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
                        />
                        {errors.titulo && <span>{errors.titulo.message}</span>}

                        {/* {Precio} */}
                        <label htmlFor="precio">Precio</label>
                        <input type="number"
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
                        />
                        {errors.precio && <span>{errors.precio.message}</span>}
                        {/* {Descripcion} */}
                        <label htmlFor="texto">Descripción</label>
                        <input type="text"
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
                        >
                            <option value="comida">Comida</option>
                            <option value="bebida">Bebida</option>
                            <option value="flor">Flor</option>
                        </select>
                        {errors.categoria && <span>{errors.categoria.message}</span>}
                        {/* {imagen} */}
                        <label htmlFor="imagen">URL Imagen</label>
                        <input type="text"
                            {...register('imagen', {
                                required: {
                                    value: true,
                                    message: "La imagen es requerida"
                                }
                            }
                            )}
                        />
                        {errors.imagen && <span>{errors.imagen.message}</span>}
                        {/* {Activo} */}
                        <div className='platoActivo'>
                            <label htmlFor="activo">Publicar Plato</label>
                            <input type="checkbox"
                                {...register('activo')}
                            />
                        </div>

                        <div className='botones'>
                            <button className='btn btn-dark' type='submit'>Guardar</button>
                            <button className='btn btn-dark' onClick={handleClose}>Cancelar</button>

                        </div>

                    </form>
                </div>
            </Modal>

            <table className='table table-bordered'>
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
                                    <button className='btn btn-dark'>Editar</button>
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