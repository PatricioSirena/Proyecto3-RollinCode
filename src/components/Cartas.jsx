import Carta from "./Carta";
import imagen1 from "../assets/img/comida.jpg";
import imagen2 from "../assets/img/bebida.jpg";
import imagen3 from "../assets/img/flores.jpg";


const cartas = [
    {
        id: 1,
        titulo: 'Para bajonear',
        imagen: imagen1,
        texto: 'Texto de prueba',
        url: "/Menu"
    },
    {
        id: 2,
        titulo: 'Para tomar',
        imagen: imagen2,
        texto: 'Texto de prueba',
        url: "/Menu"
    },
    {
        id: 3,
        titulo: 'Para fumar',
        imagen: imagen3,
        texto: 'Texto de prueba',
        url: "/Menu"
    }
]

const Cartas = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
                    {
                        cartas.map((carta) => (
                            <div className="col-lg-4 mb-5" key={carta.id}>
                                <Carta 
                                titulo={carta.titulo} 
                                imgSource={carta.imagen} 
                                text={carta.texto} 
                                url={carta.url} />
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default Cartas