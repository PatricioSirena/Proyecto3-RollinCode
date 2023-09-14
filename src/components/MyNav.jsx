import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '../styles/Mynav.css'
import Happyfood from "../img/happy.jpg";
import Carrito from "../img/carritobyn.jpg";
import { NavLink } from 'react-router-dom';

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
                            style={{ maxHeight: '100px' }}

                        >
                            <NavLink to="/" className='link'>Inicio</NavLink>
                            <NavLink to="/Menu" className='link'>Menu</NavLink>
                            <NavLink to="/Admin" className='link'>Admin</NavLink>
                            <NavLink to="/Login" className='link'>Iniciar Sesión</NavLink>
                            <NavLink to="/Registro" className='link'>Registrarme</NavLink>
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
