import '../styles/administrador.css'
import { useEffect, useState } from 'react';
import { methGetOneOrder, methGetOrders, methUpdateOrder, methDeleteOneOrder } from '../helpers/index'
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";
import { Navigate } from 'react-router-dom';

const AdminPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState({})
    const [modalEliminar, setModalEliminar] = useState(false)

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
    })

    useEffect(() => {
        methGetOrders()
            .then((datos) => { return datos.data.data })
            .then((response) => {
                if (response.length != 0) {
                    setPedidos(response)
                } else {
                    console.log('No llegaron datos');
                }
            })
    }, [])

    const aceptarPedido = (pedido) => {
        methGetOneOrder(pedido.id)
            .then((datos) => { return datos.data.order })
            .then((response) => {
                if (response.pendiente === true) {
                    response.pendiente = false;
                }
                methUpdateOrder(response, response.id);
            })
        Toast.fire({
            icon: 'success',
            title: 'Pedido aceptado!'
        })
        setTimeout(() => {
            window.location = '/admin'
        }, 2000);
    }

    const seleccionarPedido = (pedido) => {
        setPedidoSeleccionado(pedido)
        setModalEliminar(true)
    }

    const eliminarPedido = (pedido) => {
        methDeleteOneOrder(pedido.id)
        setModalEliminar(false)
        Toast.fire({
            icon: 'success',
            title: 'Pedido eliminado!'
        })
        setTimeout(() => {
            window.location = '/admin'
        }, 2000);
    }

    return (
        <>
            <Modal
                show={modalEliminar}
                onHide={() => setModalEliminar(false)}
                backdrop="static"
                keyboard={false}
                className='modalEliminar'
            >
                <div className='text-center m-3'>
                    <h4>Desea eliminar este pedido?</h4>
                </div>
                <div className='text-center'>
                    <p>{pedidoSeleccionado.platos}</p>
                </div>
                <div className='botonesEliminar d-flex justify-content-center'>
                    <button className='btn btn-danger' onClick={() => eliminarPedido(pedidoSeleccionado)}>Eliminar</button>
                    <button className='btn btn-secondary' onClick={() => setModalEliminar(false)}>Cancelar</button>
                </div>
            </Modal>

            <table className='container-fluid w-50 table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>Usuario</th>
                        <th>Pedido</th>
                        <th>Costo</th>
                        <th>Estado del Pedido</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map(pedido => (
                            <tr className='text-center' key={pedido.id}>
                                <td>{pedido.usuario}</td>
                                <td>{pedido.platos}</td>
                                <td>{pedido.precio}</td>
                                <td><button className='btn btn-dark' onClick={() => aceptarPedido(pedido)}>Aceptar Pedido</button>
                                    <button className='btn btn-danger' onClick={() => seleccionarPedido(pedido)}>Rechazar Pedido</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminPedidos