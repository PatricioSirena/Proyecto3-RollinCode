import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Happyfood from "../img/happy.jpg";
// import Carrito from "../img/carritobyn.jpg";
import '../styles/mynav.css'
import {NavLink} from 'react-router-dom'

function MyNav() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" id="nav" data-bs-theme="light" roundedCircle>
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
            </Navbar>
        </>
    );
}

export default MyNav;
