import { useEffect, useState } from 'react';
import { methGetUsers, methGetOneUser, methUpdateUser } from '../helpers/index'
import Swal from "sweetalert2";

const AdminUsuarios = () => {
    const [users, setUsers] = useState([]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })

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
        methGetOneUser(usuario.uid)
            .then((datos) => { return datos.data.usuario })
            .then((response) => {
                if (response.admin === false) {
                    response.admin = true;
                } else {
                    response.admin = false;
                }
                methUpdateUser(response.uid, response);
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario actualizado con exito!'
                })
            })
        setTimeout(() => {
            window.location = '/admin.html'
        }, 2000);
    }

    const cambiarActivo = (usuario) => {
        methGetOneUser(usuario.uid)
            .then((datos) => { return datos.data.usuario })
            .then((response) => {
                if (response.activo === false) {
                    response.activo = true;
                } else {
                    response.activo = false;
                }
                methUpdateUser(response.uid, response);
                Toast.fire({
                    icon: 'success',
                    title: 'Usuario actualizado con exito!'
                })
            })
        setTimeout(() => {
            window.location = '/admin.html'
        }, 2000);
    }

    return (
        <>

            <h3 id='usuarios' className='mb-3'>Usuarios</h3>

            <table className='table'>
                <thead>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Usuario/Administrador</th>
                        <th>Activar/Desactivar</th>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr className='text-center' key={user.uid}>
                                <td data-label='Nombre'>{user.nombre}</td>
                                <td data-label='Apellido'>{user.apellido}</td>
                                <td data-label='Correo'>{user.correo}</td>
                                <td data-label='Usuario/Admin'>{user.admin ? <button className='botonAdmin btn btn-dark' onClick={() => cambiarAdmin(user)}>Hacer Usuario</button>
                                    : <button className='botonAdmin btn btn-danger' onClick={() => cambiarAdmin(user)}>Hacer Admin</button>}</td>
                                <td data-label='Activar/Desactivar'>{user.activo ? <button className='botonAdmin btn btn-dark' onClick={() => cambiarActivo(user)}>Desactivar</button>
                                    : <button className='botonAdmin btn btn-danger' onClick={() => cambiarActivo(user)}>Activar</button>}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminUsuarios