import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";


function MyNav() {
    return (
        <>
            <Navbar className='navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink exact to="/" className={'nav-item nav-link'}>Home</NavLink>
                        <NavLink exact to="/admin" className={'nav-item nav-link'}>Admin</NavLink>
                        <NavLink exact to="/login" className={'nav-item nav-link'}>Login</NavLink>
                        <NavLink exact to="/registro" className={'nav-item nav-link'}>Registro</NavLink>
                    </Nav>  
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;