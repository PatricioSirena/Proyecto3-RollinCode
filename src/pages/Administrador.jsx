import { Container, Row, Col } from "react-bootstrap"
import AdminMenu from "../components/AdminMenu"
import AdminPedidos from "../components/AdminPedidos"
import AdminUsuarios from "../components/AdminUsuarios"
import { Navigate } from "react-router-dom"
import '../styles/administrador.css'

const Administrador = () => {

    let usuario = JSON.parse(window.localStorage.getItem("user"));

    if (usuario === null) {
        return <Navigate to={'/'} />
    }

    if (usuario.admin != true) {
        return <Navigate to={'/'} />
    } else {
        return (
            <div className="containerAdmin mb-5">
                <div className="indiceAdmin">
                    <ul className="accesosAdmin">
                        <li><a href="#pedidos">Pedidos</a></li>
                        <li><a href="#usuarios">Usuarios</a></li>
                        <li><a href="#productos">Productos</a></li>
                    </ul>
                </div>
                <Container fluid>
                    <Row>
                        <Col xl={6} lg={12} md={12} sm={6} className='componentePedidos'>
                            <AdminPedidos />
                        </Col>
                        <Col xl={6} lg={12} md={12} sm={6} >
                            <AdminUsuarios />
                        </Col>
                    </Row>
                </Container>
                <AdminMenu className="mt-5"/>
            </div>
        )
    }
}

export default Administrador