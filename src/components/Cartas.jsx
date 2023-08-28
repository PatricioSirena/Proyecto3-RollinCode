import Carta from "./Carta";
import imagen1 from "../assets/img/comida.webp";
import imagen2 from "../assets/img/bebida.jpg";
import imagen3 from "../assets/img/flores.webp";

const cartas = [
    {
        id: 1,
        titulo: 'Para bajonear',
        imagen: imagen1,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    },
    {
        id: 2,
        titulo: 'Para tomar',
        imagen: imagen2,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    },
    {
        id: 3,
        titulo: 'Para fumar',
        imagen: imagen3,
        texto: 'Texto de prueba',
        url: 'https://instagram.com'
    }
]

const Cartas = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center">
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