import TarjetaInfo from "./TarjetaInfo";
import TarjetaInfoDerecha from "./TarjetaInfoDerecha";
import imagen1 from "../assets/img/comida.webp";
import imagen2 from "../assets/img/bebida.jpg";


const tarjetas = [
    {
        id: 1,
        titulo: 'Titulo de prueba',
        texto: 'Texto de prueba',
        imagen: imagen1
    },
    {
        id: 2,
        titulo: 'Titulo de prueba',
        texto: 'Texto de prueba',
        imagen: imagen2
    },
]


const TarjetasInfo = () => {
    return (
        <>
            {
                tarjetas.map(tarjeta => (
                    <div key={tarjeta.id}>
                        <TarjetaInfo
                            titulo={tarjeta.titulo}
                            texto={tarjeta.texto}
                            imgSource={tarjeta.imagen}
                        />
                    </div>
                ))
            }
                <TarjetaInfoDerecha />    
        </>
    )
}

export default TarjetasInfo