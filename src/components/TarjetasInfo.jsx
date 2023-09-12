import TarjetaInfo from "./TarjetaInfo";
import imagen1 from "../img/burger_4.jpg";
import imagen2 from "../img/coquita.jpg";
import imagen3 from "../img/burger_mano.jpg";


const tarjetas = [
    {
        id: 'tarjeta1',
        titulo: 'prueba',
        texto: 'Texto de prueba',
        imagen: imagen1
    },
    {
        id: 'tarjeta2',
        titulo: 'prueba',
        texto: 'Texto de prueba',
        imagen: imagen2
    },
    {
        id: 'tarjeta3',
        titulo: 'prueba',
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