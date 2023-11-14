import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Happyfood from "../img/happy.jpg";
import Carrito from "../img/carritobyn.jpg";
import '../styles/MyNav.css'
import '../App.css';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useContext, useState } from 'react';
import { CarritoContexto } from '../context/ContextoCarrito';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { methPostOrder } from '../helpers/index'


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
            pendiente: true
        }
        console.log(pedido);
        setSmShow(false);
        methPostOrder(pedido)
        setCarrito([])
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su pedido fue enviado, aguarde a que un administrador lo apruebe',
            showConfirmButton: false,
            timer: 2000
        })
    }

    const logout = () => {
        Swal.fire({
            title: 'Desea desloguearse?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Desloguearme'
        }).then((result) => {
            console.log(result);
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
            <div className="warning">
                <div className="warning__icon">
                </div>
                <div className="warning__title">
                    <span>
                        ☻ Todos los Jueves 20% de Descuento en TODOS Nuestros Productos | Cod: BIENVENIDA_HAPPY
                    </span>
                </div>
                <div className="warning__close"><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
            </div>
            <Navbar expand="lg" sticky="top" className="bg-body-tertiary" id="nav" data-bs-theme="light">
                <Container fluid>
                    <NavLink to="/" className='logo'>
                        <img src={Happyfood} className='logo' alt="Logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" id="hamburguesa" />
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto my-4 my-lg-0"
                            style={{ maxHeight: '200px' }}
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
                            {admin &&
                                <NavLink to="/admin" className={'nav-item nav-link'}>Admin</NavLink>
                            }
                            <NavLink to="/menu" className={'nav-item nav-link'}>Nuestros Platos</NavLink>

                        </Nav>
                        <Button onClick={() => setSmShow(true)} className="me-2 btn-dark">
                            <img src={Carrito} className='carrito' alt="Carrito" />
                            <span className='cantidadCarrito'>{cantidad}</span>
                        </Button>
                        {
                            <Modal
                                size="sm"
                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm text-center">
                                        Carrito
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="contenedor-carrito ">
                                        <div className='tituloModal text-center'>
                                            <h3>Items en el carrito:</h3>
                                        </div>
                                        <div className='articulosModal'>
                                            {
                                                carrito.map((item) => {
                                                    return <li style={{ marginLeft: '2rem' }} key={item.id}>
                                                        {item.titulo}{'   x '}
                                                        {item.quantity}
                                                    </li>
                                                })
                                            }
                                        </div>
                                        <div className="mt-3 text-center">
                                            <span><b>Cantidad total: {cantidad}</b></span>
                                        </div>
                                        <br />
                                        <div className='text-center'>
                                            <h5>Total a pagar:</h5>
                                            <p>${precioTotal}</p>
                                        </div>
                                        <br />
                                        <button
                                            style={{ marginLeft: '4rem' }}
                                            className='btn btn-secondary'
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
