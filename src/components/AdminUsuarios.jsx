import '../styles/administrador.css'
import { useEffect, useState } from 'react';
import { methGetUsers, methGetOneUser, methUpdateUser } from '../helpers/index'


const AdminUsuarios = () => {
    const [users, setUsers] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
        id: '',
        correo: '',
        usuario: '',
        activo: '',
        admin: '',
        password: ''
    });

    useEffect(() => {
        methGetUsers()
            .then((datos) => { return datos.data })
            .then((response) => {
                if (response.length != 0) {
                    setUsers(response)
                } else {
                    console.log('No llegaron datos');
                }
            })
    }, [])

    const seleccionarUsuario = (usuario) => {
        // setUsuarioSeleccionado({})
        methGetOneUser(usuario.id)
            .then((datos) => { return datos.data })
            .then((response) => setUsuarioSeleccionado(response));
            usuarioSeleccionado({
                id: '',
                correo: '',
                usuario: '',
                activo: '',
                admin: '',
                password: ''
            })
        if (usuarioSeleccionado.admin === false) {
            usuarioSeleccionado.admin = true;
        } else {
            usuarioSeleccionado.admin = false;
        }
        methUpdateUser(usuarioSeleccionado.id, usuarioSeleccionado);
        window.location='/admin'
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
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Usuario/Administrador</th>
                        <th>Activar/Desactivar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr className='text-center' key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.usuario}</td>
                                <td>{user.correo}</td>
                                <td>{user.admin ? <button className='btn btn-dark' onClick={() => seleccionarUsuario(user, 'Administrador')}>Usuario</button>
                                    : <button className='btn btn-danger' onClick={() => seleccionarUsuario(user, 'Usuario')}>Administrador</button>}</td>
                                <td>{user.activo ? <button className='btn btn-dark'>Desactivar</button>
                                    : <button className='btn btn-danger'>Activar</button>}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminUsuarios