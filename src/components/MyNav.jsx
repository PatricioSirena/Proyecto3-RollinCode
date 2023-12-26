import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Happyfood from "../img/logonuevo.jpg";
import Carrito from "../img/carritobyn.jpg";
import '../styles/MyNav.css'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { CarritoContexto } from '../context/ContextoCarrito';
import Modal from 'react-bootstrap/Modal';
import { methPostOrder } from '../helpers/index'
import logoAdmin from '../img/logo-admin.jpg'


function MyNav({ isLogueado, setIslogueado, admin, setAdmin, setUser }) {

    const [smShow, setSmShow] = useState(false);
    const [carrito, setCarrito] = useContext(CarritoContexto);

    const cantidad = carrito.reduce((acumulador, actual) => {
        return acumulador + actual.quantity;
    }, 0);

    const totalPrice = carrito.reduce((acumulador, actual) => {
        return acumulador + actual.quantity * actual.precio;
    }, 0);

    const precioTotal = totalPrice.toFixed(2)

    const enviarPedido = () => {

        let userData = JSON.parse(window.localStorage.getItem("user"));
        let usuario = userData.correo 

        function extraerAtributos(arrayObjetos, atributo1, atributo2) {
            let concatenado = "";
            for (let i = 0; i < arrayObjetos.length; i++) {
                concatenado += arrayObjetos[i][atributo1] + " x " + arrayObjetos[i][atributo2] + ". ";
            }
            return concatenado.trim();
        }

        let comidas = extraerAtributos(carrito, "titulo", "quantity")

        let pedido = {
            platos: comidas,
            precio: precioTotal,
            pendiente: true,
            usuario
        }
        setSmShow(false);
        methPostOrder(pedido)
        setCarrito([])
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su pedido fue enviado, aguarde a que un administrador lo apruebe',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const logout = () => {
        Swal.fire({
            title: 'Desea desloguearse?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Desloguearme'
        }).then((result) => {
            if (result.isConfirmed) {
                setAdmin(false),
                    setUser({}),
                    setIslogueado(false),
                    window.localStorage.removeItem("user"),
                    window.localStorage.removeItem("token"),
                    window.location = "/"
            }
        })
    }

    return (
        <>
            
            <Navbar expand="lg" className="bg-body-tertiary" id="nav" data-bs-theme="light">
                <Container fluid>
                    <NavLink to="/" className='logo'>
                        <img src={Happyfood} className='logoNav' alt="Logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" id="hamburguesa" />
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto my-4 my-lg-0"
                            style={{ maxHeight: '200px'}}
                        >
                            {isLogueado ?
                                <>
                                    <NavLink to="/" className={'nav-item nav-link'} onClick={logout}>Logout</NavLink>
                                </>
                                :
                                <>
                                    <NavLink to="/login" className={'nav-item nav-link'}>Login</NavLink>
                                    <NavLink to="/registro" className={'nav-item nav-link'}>Registro</NavLink>
                                </>
                            }
                            <NavLink to="/menu" className={'nav-item nav-link'}>Menu</NavLink>

                        </Nav>
                            {admin &&
                                <NavLink to="/admin.html" className={'nav-item nav-link'}>
                                <img src={logoAdmin} className='logoAdmin' alt="logo-admin" />
                                </NavLink>
                            }
                        <button onClick={() => setSmShow(true)} className="botonCarrito d-flex">
                            <img src={Carrito} className='carrito' alt="Carrito" />
                            <span className='cantidadCarrito'>{cantidad}</span>
                        </button>
                        {
                            <Modal
                                size="sm"
                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title className='tituloCarrito' id="example-modal-sizes-title-sm">
                                        Carrito
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="contenedor-carrito text-center">
                                        <div className='tituloModal text-center'>
                                            <h3>Items en el carrito:</h3>
                                        </div>
                                        <div className='articulosModal text-center mt-3'>
                                            {
                                                carrito.map((item) => {
                                                    return <li className='platosCarrito' key={item.id}>
                                                        {item.titulo}{'   x '}
                                                        {item.quantity}
                                                    </li>
                                                })
                                            }
                                        </div>
                                        <div className="mt-3 text-center">
                                            <span className='spanCantidad'><b>Cantidad total: {cantidad}</b></span>
                                        </div>
                                        <br />
                                        <div className='text-center'>
                                            <h5>Total a pagar:</h5>
                                            <p>${precioTotal}</p>
                                        </div>
                                        <button
                                            // style={{ marginLeft: '4rem' }}
                                            className='btn'
                                            onClick={() => enviarPedido(carrito)}>Finalizar compra</button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

}

export default MyNav;
