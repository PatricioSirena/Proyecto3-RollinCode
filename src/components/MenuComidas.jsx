import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import {methGet} from '../helpers/index'
import { useEffect, useState } from "react";

const MenuComidas = ({isLogueado}) => {
    const [comidas, setComidas] = useState([]);

    useEffect(() => {
        methGet()
            .then((datos) => {return datos.data.data })
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
                let food = filtrarPorCategoria(response, "comida")
                setComidas(food)
            })
    }, [])

    return (
        <div id="menuComidas" className="text-center">
            <h1 className="text-menu mb-3">Comidas</h1>
            <Container>
                <Row>
                    {
                        comidas.map((comida) => (
                            <Col xs={12} md={6} xl={4} xxl={4} className="mb-5" key={comida.id}>
                                <PlatosMenu
                                isLogueado={isLogueado}
                                    id={comida.id}
                                    titulo={comida.titulo}
                                    imgSource={comida.imagen}
                                    text={comida.texto}
                                    precio={comida.precio} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MenuComidas