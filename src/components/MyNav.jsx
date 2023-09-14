import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/navbar.css'
import '../styles/mynav.css'

// function MyNav() {
//     const [smShow, setSmShow] = useState(false);
//     const [carrito, setCarrito] = useContext(CarritoContexto);

//     const cantidad = carrito.reduce((acumulador, actual) => {
//         return acumulador + actual.quantity;
//     }, 0);

//     const precioTotal = carrito.reduce((acumulador, actual) => {
//         return acumulador + actual.quantity * actual.precio;
//     }, 0);



//     return (
//         <>
//             <Navbar expand="lg" className="bg-body-tertiary" id="nav" data-bs-theme="light" roundedCircle>
//                 <Container fluid>
//                     <a href="../index.html" className='logo'>
//                         <img src='' className='logo' alt="Logo" />
//                     </a>
//                     <Navbar.Toggle aria-controls="navbarScroll" id="hamburguesa" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="me-auto my-4 my-lg-0"
//                             style={{ maxHeight: '100px' }}
//                             navbarScroll
//                         >
//                             <NavLink to='/' className='link'>Inicio</NavLink>
//                             <NavLink to='/Menu' className='link'>Nuestros Platos</NavLink>
//                             <NavLink to='/Admin' className='link'>Admin</NavLink>
//                             <NavLink to='/Login' className='link'>Iniciar Sesión</NavLink>
//                         </Nav>
//                         <a href="#" className='carrito'>
//                             <img src='' className='carrito' alt="Carrito" />
//                         </a>
//                     </Navbar.Collapse>
//             <Navbar className='navbar' bg="dark" data-bs-theme="dark">
//                 <Container>
//                     <Nav className="me-auto">
//                         <NavLink exact to="/" className='btn btn-dark'>Home</NavLink>
//                         <NavLink exact to="/Menu" className='btn btn-dark'>Menu</NavLink>
//                         <Button onClick={() => setSmShow(true)} className="me-2 btn-dark">
//                             Carrito <span className='cantidadCarrito'>{cantidad}</span>
//                         </Button>
//                         {
//                             <Modal
//                                 size="sm"
//                                 show={smShow}
//                                 onHide={() => setSmShow(false)}
//                                 aria-labelledby="example-modal-sizes-title-sm"
//                             >
//                                 <Modal.Header closeButton>
//                                     <Modal.Title id="example-modal-sizes-title-sm">
//                                         Carrito
//                                     </Modal.Title>
//                                 </Modal.Header>
//                                 <Modal.Body>
//                                     <div className="contenedor-carrito ">
//                                         <div className='tituloModal text-center'>
//                                             <h3>Items en el carrito:</h3>
//                                         </div>
//                                         <div className='articulosModal'>
//                                             {
//                                                 carrito.map((item) => {
//                                                     return <li style={{marginLeft: '2rem'}} key={item.id}>
//                                                         {item.titulo}{'   *'}
//                                                         {item.quantity}
//                                                     </li>
//                                                 })
//                                             }
//                                             </div>
//                                             <div className="mt-3 text-center">
//                                                 <span><b>Cantidad total: {cantidad}</b></span>
//                                             </div>
//                                         <br />
//                                         <div className='text-center'>
//                                             <h5>Total a pagar:</h5>
//                                             <p>${precioTotal}</p>
//                                         </div>
//                                         <br />
//                                         <button style={{marginLeft: '4rem'}} className='btn btn-secondary' onClick={() => console.log(carrito)}>Finalizar compra</button>
//                                     </div>
//                                 </Modal.Body>
//                             </Modal>
//                         }
//                     </Nav>
//                         <NavLink exact to="/" className={'nav-item nav-link'}>Home</NavLink>
//                         <NavLink exact to="/admin" className={'nav-item nav-link'}>Admin</NavLink>
//                         <NavLink exact to="/login" className={'nav-item nav-link'}>Login</NavLink>
//                         <NavLink exact to="/registro" className={'nav-item nav-link'}>Registro</NavLink>
//                     </Nav>  
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default MyNav;

import Happyfood from "../img/happy.jpg";
import Carrito from "../img/carritobyn.jpg";
import '../styles/mynav.css'

function MyNav() {
    return (
        <>
            <div className="warning">
                <div className="warning__icon">

                </div>
                <div className="warning__title">☻ Todos los Jueves 20% de Descuento en TODOS Nuestros Productos | Cod: BIENVENIDA_HAPPY</div>
                <div className="warning__close"><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
            </div>
            <Navbar expand="lg" sticky="top" className="bg-body-tertiary" id="nav" data-bs-theme="light" roundedCircle>
                <Container fluid>
                    <a href="../index.html" className='logo'>
                        <img src={Happyfood} className='logo' alt="Logo" />
                    </a>
                    <Navbar.Toggle aria-controls="navbarScroll" id="hamburguesa" />
                    <Navbar.Collapse>
                        <Nav
                            className="me-auto my-4 my-lg-0"
                            style={{ maxHeight: '200px' }}

                        >
                            <Nav.Link href="#action2" className='link'>Inicio</Nav.Link>
                            <Nav.Link href="#action2" className='link'>Menu</Nav.Link>
                            <Nav.Link href="#action2" className='link'>Admin</Nav.Link>
                            <Nav.Link href="#action1" className='link'>Iniciar Sesión</Nav.Link>
                            <Nav.Link href="#action1" className='link'>Registrarme</Nav.Link>
                        </Nav>
                        <a href="#" className='carrito'>
                            <img src={Carrito} className='carrito' alt="Carrito" />
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
