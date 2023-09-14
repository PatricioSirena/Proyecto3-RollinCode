import Carta from "./Carta";
import imagen1 from "../assets/img/comida.jpg";
import imagen2 from "../assets/img/bebida.jpg";
import imagen3 from "../assets/img/flores.jpg";
import imagen1 from "../img/burger_1.jpg";
import imagen2 from "../img/beer.jpg";
import imagen3 from "../img/0473F1BF-4228-44F3-9CD1-33C159917F1B.jpg";

const cartas = [
    {
        id: 1,
        titulo: 'Burgers',
        imagen: imagen1,
        texto: 'Texto de prueba',
        url: "/Menu"
    },
    {
        id: 2,
        titulo: 'Bebidas',
        imagen: imagen2,
        texto: 'Texto de prueba',
        url: "/Menu"
    },
    {
        id: 3,
        titulo: 'Flores',
        imagen: imagen3,
        texto: 'Texto de prueba',
        url: "/Menu"
    }
]

const Cartas = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
        <div className="container justify-content-center align-items-center">
            <div className="row justify-content-center">
                    <h1 className="spoiler justify-content-center align-items-center animate__zoomInLeft">Spoilers que sí.</h1>
                    {
                        cartas.map((carta) => (
                            <div className="col-lg-3 m-4 justify-content-center" key={carta.id}>
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