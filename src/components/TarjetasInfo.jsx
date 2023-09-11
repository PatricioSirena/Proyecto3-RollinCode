import TarjetaInfo from "./TarjetaInfo";
import imagen1 from "../img/burger_2.jpg";
import imagen2 from "../img/coca.jpg";
import imagen3 from "../img/7481B47E-55F3-4E6B-A895-90838A8D43D8.jpg";


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