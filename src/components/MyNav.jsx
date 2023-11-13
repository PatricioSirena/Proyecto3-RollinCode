import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Happyfood from "../img/happy.jpg";
import Carrito from "../img/carritobyn.jpg";
import '../styles/mynav.css'
import '../App.css';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function MyNav({ isLogueado, setIslogueado, admin, setAdmin, setUser }) {

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
                        <NavLink href="#" className='carrito'>
                            <img src={Carrito} className='carrito' alt="Carrito" />
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
