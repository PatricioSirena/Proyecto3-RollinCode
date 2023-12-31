import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import { methGet } from '../helpers/index'
import { useEffect, useState } from "react";

const MenuFlores = ({isLogueado}) => {
    const [flores, setFlores] = useState([])

    useEffect(() => {
        methGet()
            .then((datos) => {return datos.data.data})
            .then((response) => {
                function filtrarPorCategoria(objetos, categoria) {
                    let filtrados = [];
                    for (let i = 0; i < objetos.length; i++) {
                        if (objetos[i].categoria === categoria && objetos[i].activo == true) {
                            filtrados.push(objetos[i]);
                        }
                    }
                    return filtrados;
                }
                let flowers = filtrarPorCategoria(response, "flor")
                setFlores(flowers)
            })
    }, [])

    return (
        <div id="menuFlores" className="text-center">
            <h1 className="text-menu mb-4">Flores</h1>
            <Container>
                <Row>
                    {
                        flores.map((flor) => (
                            <Col xs={12} md={6} xl={4} xxl={4} className="mb-5" key={flor.id}>
                                <PlatosMenu
                                isLogueado={isLogueado}
                                    id={flor.id}
                                    titulo={flor.titulo}
                                    imgSource={flor.imagen}
                                    text={flor.texto}
                                    precio={flor.precio} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MenuFlores