import { useForm } from 'react-hook-form'
import '../styles/administrador.css'

const Administrador = () => {

    const { formState: { errors }, handleSubmit, register, reset } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <>
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
                                value: /^[A-Za-z0-9]{4,20}\S+$/,
                                message: 'Solo letras y numeros son validos.'
                            }
                        }
                        )}
                    />
                    errors.titulo && <span>{errors.titulo.message}</span>
                    
                    {/* {Precio} */}
                    <label htmlFor="precio">Precio</label>
                    <input type="number"
                        {...register('precio', {
                            required: {
                                value: true,
                                message: "El precio es requerido"
                            },
                            pattern: {
                                value: /^[0-9]+[.,]{1,1}\[0]{2,2}$/,
                                message: 'Debe ingresar un número con dos decimales y no debe contener ningún otro símbolo.'
                            }
                        }
                        )}
                    />
                    errors.precio && <span>{errors.precio.message}</span>
                    {/* {Descripcion} */}
                    <label htmlFor="texto">Descripción</label>
                    <input type="text"
                        {...register('texto', {
                            required: {
                                value: true,
                                message: "La descripción es requerida"
                            },
                            pattern: {

                            }
                        }
                        )}
                    />

                    {/* {Categoria} */}
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        {...register('categoria', {
                            required: {
                                value: true,
                                message: "La categoria es requerida"
                            },
                            pattern: {

                            }
                        }
                        )}
                    >
                        <option value="comida">Comida</option>
                        <option value="bebida">Bebida</option>
                        <option value="flor">Flor</option>
                    </select>

                    {/* {imagen} */}
                    <label htmlFor="imagen">URL Imagen</label>
                    <input type="text"
                        {...register('imagen', {
                            required: {
                                value: true,
                                message: "La imagen es requerida"
                            },
                            pattern: {

                            }
                        }
                        )}
                    />

                    {/* {Activo} */}
                    <div className='platoActivo'>
                        <label htmlFor="activo">Publicar Plato</label>
                        <input type="checkbox"
                            {...register('activo')}
                        />
                    </div>

                    <div className='botones'>
                        <button className='btn btn-dark' type='submit'>Guardar</button>
                        <button className='btn btn-dark'>Cancelar</button>

                    </div>

                </form>
            </div>
        </>
    )
}

export default Administrador