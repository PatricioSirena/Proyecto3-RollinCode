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
            <div className="containerAdmin">
                <Container fluid>
                    <Row>
                        <Col>
                            <AdminPedidos />
                        </Col>
                        <Col>
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