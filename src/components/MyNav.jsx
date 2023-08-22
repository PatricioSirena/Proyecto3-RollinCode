// import {NavLink,Link,Navigate} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function MyNav(props) {
//   const logout=()=>{
//     props.setAdmin(false);
//     props.setUser({});
//     props.setIslogueado(false);
//     window.localStorage.removeItem("user")
//   }
//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//         <Nav className="me-auto">
//           {props.isLogueado?

//           <>
//             <NavLink to={"/products"} className={'nav-item nav-link'}>Products</NavLink>
//             <NavLink to={"/"} className={'nav-item nav-link'} onClick={logout}>Logout</NavLink>
//           </>
//           :
//           <>
//             <NavLink to={"/"} className={'nav-item nav-link'}>Inicio</NavLink>
//             <NavLink to={"/login"} className={'nav-item nav-link'}>Login</NavLink>
//             <NavLink to={"/register"} className={'nav-item nav-link'}>Register</NavLink>
//         </>
//           }
//           {props.admin && 
//           <>

//             <NavLink to={"/admin"} className={'nav-item nav-link'}>Admin</NavLink>
//             <NavLink to={"/admin/addProduct"} className={'nav-item nav-link'}>Añadir Producto</NavLink>

//           </>
//           }
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default MyNav;