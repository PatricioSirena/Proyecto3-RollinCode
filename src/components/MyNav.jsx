import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Admin from '../pages/Admin'


function MyNav() {
    return (
        <BrowserRouter>
            <Navbar className='navbar' bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/Admin">Home</Link>
                        <Nav.Link href="">Admin</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    
                </Container>
                <Routes>
                <Route  path="/Admin" element={<Admin/>} />
                </Routes>

            </Navbar>
        </BrowserRouter>
    );
}

export default MyNav;