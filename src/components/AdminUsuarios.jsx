import '../styles/administrador.css'
import { useEffect, useState } from 'react';
import { methGetUsers, methGetOneUser, methUpdateUser } from '../helpers/index'

const AdminUsuarios = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        methGetUsers()
            .then((datos) => { return datos.data.usr })
            .then((response) => {
                if (response.length != 0) {
                    setUsers(response)
                } else {
                    console.log('No llegaron datos');
                }
            })
    }, [])

    const cambiarAdmin = (usuario) => {
        // setUsuarioSeleccionado({})
        methGetOneUser(usuario.uid)
            .then((datos) => { return datos.data.usuario })
            .then((response) => {
                if (response.admin === false) {
                    response.admin = true;
                } else {
                    response.admin = false;
                }
                console.log(response);
                methUpdateUser(response.uid, response);
            })
        setTimeout(() => {
            window.location = '/admin'
        }, 2000);
    }

    const cambiarActivo = (usuario) => {
        // setUsuarioSeleccionado({})
        methGetOneUser(usuario.uid)
            .then((datos) => { return datos.data.usuario })
            .then((response) => {
                if (response.activo === false) {
                    response.activo = true;
                } else {
                    response.activo = false;
                }
                console.log(response);
                methUpdateUser(response.uid, response);
            })
        setTimeout(() => {
            window.location = '/admin'
        }, 2000);
    }

    // const editar = () => {
    //     menu.map((plato) => {
    //         if ((plato.id === platoSeleccionado.id)) {
    //             plato.titulo === platoSeleccionado.titulo
    //             plato.precio === platoSeleccionado.precio
    //             plato.texto === platoSeleccionado.texto
    //             plato.categoria === platoSeleccionado.categoria
    //             plato.activo === platoSeleccionado.activo
    //             plato.imagen === platoSeleccionado.imagen
    //         }
    //     });
    //     methUpdate(platoSeleccionado, platoSeleccionado.id);
    //     setModalEditar(false)
    //     window.location.replace('');
    // }

    // const eliminar = () => {
    //     methDeleteOne(platoSeleccionado.id)
    //     window.location.replace('');
    // }

    return (
        <>
            <table className='container w-25 table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Usuario/Administrador</th>
                        <th>Activar/Desactivar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr className='text-center' key={user.uid}>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.correo}</td>
                                <td>{user.admin ? <button className='btn btn-dark' onClick={() => cambiarAdmin(user)}>Hacer Usuario</button>
                                    : <button className='btn btn-danger' onClick={() => cambiarAdmin(user)}>Hacer Admin</button>}</td>
                                <td>{user.activo ? <button className='btn btn-dark' onClick={() => cambiarActivo(user)}>Desactivar</button>
                                    : <button className='btn btn-danger' onClick={() => cambiarActivo(user)}>Activar</button>}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminUsuarios