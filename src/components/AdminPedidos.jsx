import { useEffect, useState } from 'react';
import { methGetOneOrder, methGetOrders, methUpdateOrder, methDeleteOneOrder } from '../helpers/index'
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";

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
            window.location = '/admin.html'
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
                    <button className='btn btn-danger m-2' onClick={() => eliminarPedido(pedidoSeleccionado)}>Eliminar</button>
                    <button className='btn btn-secondary m-2' onClick={() => setModalEliminar(false)}>Cancelar</button>
                </div>
            </Modal>
        
            <h3 id='pedidos' className='mb-3'>Pedidos</h3>

            <table className='table'>
                <thead>
                        <th>Usuario</th>
                        <th>Pedido</th>
                        <th>Costo</th>
                        <th>Aceptar/Rechazar</th>
                </thead>
                <tbody>
                    {
                        pedidos.map(pedido => (
                            <tr className='text-center' key={pedido.id}>
                                <td data-label='Usuario'>{pedido.usuario}</td>
                                <td data-label='Pedido'>{pedido.platos}</td>
                                <td data-label='Costo'>{pedido.precio}</td>
                                <td data-label='Aceptar/Rechazar'><button className='botonAdmin btn btn-dark' onClick={() => aceptarPedido(pedido)}>Aceptar</button>
                                    <button className='botonAdmin btn btn-danger' onClick={() => seleccionarPedido(pedido)}>Rechazar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminPedidos