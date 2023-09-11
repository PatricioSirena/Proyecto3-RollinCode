import TarjetaInfo from "./TarjetaInfo";
import imagen1 from "../img/IMG_4488.jpg";
import imagen2 from "../img/IMG_4517.jpg";
import imagen3 from "../img/IMG_4482.jpg";


const tarjetas = [
    {
        id: 'tarjeta1',
        titulo: 'Te recomendamos este plato para un dia como hoy.',
        texto: 'Texto de prueba',
        imagen: imagen1
    },
    {
        id: 'tarjeta2',
        titulo: 'Un mojito clasico nunca viene mal.',
        texto: 'Texto de prueba',
        imagen: imagen2
    },
    {
        id: 'tarjeta3',
        titulo: 'La ensalada mas bonita que veras hoy.',
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