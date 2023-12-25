import { Col, Container, Row } from "react-bootstrap";
import PlatosMenu from "./PlatosMenu";
import {methGet} from '../helpers/index'
import { useEffect, useState } from "react";

const MenuBebidas = ({isLogueado}) => {
    const [bebidas, setBebidas] = useState([]);

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
                let drinks = filtrarPorCategoria(response, "bebida")
                setBebidas(drinks)
            })
    }, [])
    
    return (
        <div id="menuBebidas" className="text-center">
            <h1 className="text-menu mb-4">Bebidas</h1>
            <Container>
                <Row>
                    {
                        bebidas.map((bebida) => (
                            <Col xs={12} md={6} xl={4} xxl={4} className="mb-5" key={bebida.id}>
                                <PlatosMenu
                                    isLogueado={isLogueado}
                                    id={bebida.id}
                                    titulo={bebida.titulo}
                                    imgSource={bebida.imagen}
                                    text={bebida.texto}
                                    precio={bebida.precio} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MenuBebidas