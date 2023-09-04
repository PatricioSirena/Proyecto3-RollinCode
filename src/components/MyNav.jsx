import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Happyfood from "../img/happy.jpg";
import Carrito from "../img/carritobyn.jpg";
import '../styles/mynav.css'

function MyNav() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" id="nav" data-bs-theme="light" roundedCircle>
      <Container fluid>
        <a href="../index.html" className='logo'>
        <img src={Happyfood} className='logo' alt="Logo" />
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-4 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="#action2" className='link'>Nuestros Platos</Nav.Link>
            <Nav.Link href="#action2" className='link'>Admin</Nav.Link>
            <Nav.Link href="#action1" className='link'>Iniciar Sesión</Nav.Link>
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

// <Navbar.Brand href="#home">HappyFood</Navbar.Brand>
/*<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */