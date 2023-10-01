import { useForm } from 'react-hook-form'
import '../styles/administrador.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Administrador = () => {

    const { formState: { errors }, handleSubmit, register, reset } = useForm();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {reset();setShow(true);}

    const onSubmit = handleSubmit((data) => {
            console.log(data),
            handleClose()
        
    })

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Agregar Plato
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <div className='agregarPlato'>
                    <form onSubmit={onSubmit}>
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
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer> */}
            </Modal>

        </>
    )
}

export default Administrador