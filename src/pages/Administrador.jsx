import { Container, Row, Col } from "react-bootstrap"
import AdminMenu from "../components/AdminMenu"
import AdminPedidos from "../components/AdminPedidos"
import AdminUsuarios from "../components/AdminUsuarios"
import { Navigate } from "react-router-dom"

const Administrador = () => {

    let usuario = JSON.parse(window.localStorage.getItem("user"));

    if (usuario === null) {
        return <Navigate to={'/'} />
    }

    if (usuario.admin != true) {
        return <Navigate to={'/'} />
    } else {
        return (
            <>
                <Container fluid className="mt-4">
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
            </>
        )
    }
}

export default Administrador