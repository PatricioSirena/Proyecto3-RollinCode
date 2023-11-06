import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import { useContext, useState } from 'react';
import { CarritoContexto } from '../context/ContextoCarrito';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../styles/mynav.css'
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

function MyNav() {
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
        window.localStorage.setItem("pedidos", JSON.stringify(pedido));
        setSmShow(false);
        setCarrito([])
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su pedido fue enviado, aguarde a que un administrador lo apruebe',
            showConfirmButton: false,
            timer: 2000
        })
    }


    return (
        <>
            {/* <Navbar expand="lg" className="bg-body-tertiary" id="nav" data-bs-theme="light" roundedCircle>
                <Container fluid>
                    <a href="../index.html" className='logo'>
                        <img src='' className='logo' alt="Logo" />
                    </a>
                    <Navbar.Toggle aria-controls="navbarScroll" id="hamburguesa" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-4 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to='/' className='link'>Inicio</NavLink>
                            <NavLink to='/Menu' className='link'>Nuestros Platos</NavLink>
                            <NavLink to='/Admin' className='link'>Admin</NavLink>
                            <NavLink to='/Login' className='link'>Iniciar Sesión</NavLink>
                        </Nav>
                        <a href="#" className='carrito'>
                            <img src='' className='carrito' alt="Carrito" />
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <Navbar className='navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" className='btn btn-dark'>Home</NavLink>
                        <NavLink to="/Menu" className='btn btn-dark'>Menu</NavLink>
                        <Button onClick={() => setSmShow(true)} className="me-2 btn-dark">
                            Carrito <span className='cantidadCarrito'>{cantidad}</span>
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
                    </Nav>
                    {/* <NavLink exact to="/" className={'nav-item nav-link'}>Home</NavLink>
                        <NavLink exact to="/admin" className={'nav-item nav-link'}>Admin</NavLink>
                        <NavLink exact to="/login" className={'nav-item nav-link'}>Login</NavLink>
                        <NavLink exact to="/registro" className={'nav-item nav-link'}>Registro</NavLink>
                    </Nav>   */}
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
