import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import '../estilos/navbar.css'
import { useContext } from 'react';
import { CarritoContexto } from '../context/ContextoCarrito';

function MyNav() {

    const [carrito, setCarrito] = useContext(CarritoContexto);

    const cantidad = carrito.reduce((acumulador, actual) => {
        return acumulador + actual.quantity;
    }, 0);

    return (
        <>
            <Navbar className='navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink exact to="/" className='btn btn-dark'>Home</NavLink>
                        <NavLink exact to="/Menu" className='btn btn-dark'>Menu</NavLink>
                        <NavLink exact to="/Carrito" className='btn btn-dark'>
                            Carrito <span className='cantidadCarrito'>{cantidad}</span>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;