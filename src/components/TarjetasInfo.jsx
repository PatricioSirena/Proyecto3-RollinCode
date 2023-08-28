import TarjetaInfo from "./TarjetaInfo";
import imagen1 from "../assets/img/comida.webp";
import imagen2 from "../assets/img/bebida.jpg";
import imagen3 from "../assets/img/flores.webp";


const tarjetas = [
    {
        id: 'tarjeta1',
        titulo: 'Titulo de prueba',
        texto: 'Texto de prueba',
        imagen: imagen1
    },
    {
        id: 'tarjeta2',
        titulo: 'Titulo de prueba',
        texto: 'Texto de prueba',
        imagen: imagen2
    },
    {
        id: 'tarjeta3',
        titulo: 'Titulo de prueba',
        texto: 'Texto de prueba',
        imagen: imagen3
    }
]


const TarjetasInfo = () => {
    return (
        <>
            {
                tarjetas.map(tarjeta => (
                    <div key={tarjeta.id}>
                        <TarjetaInfo
                            id={tarjeta.id}
                            titulo={tarjeta.titulo}
                            texto={tarjeta.texto}
                            imgSource={tarjeta.imagen}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default TarjetasInfo