import TarjetaInfo from "./TarjetaInfo";
import imagen1 from "../img/burguer-tarjeta2.jpg";
import imagen2 from "../img/lata-tarjeta.jpg";
import imagen3 from "../img/burguer-tarjeta.jpg";


const tarjetas = [
    {
        id: 'tarjeta1',
        titulo: 'Productos orgánicos de Productores regionales',
        texto: 'Todos nuestros platos estan realizados con productos orgánicos y libres de pesticidas, provenientes de granjas y cultivos regionales.',
        imagen: imagen1
    },
    {
        id: 'tarjeta2',
        titulo: '20% OFF todos los jueves',
        texto: 'Recibimos todos los medios de pago. :)',
        imagen: imagen2
    },
    {
        id: 'tarjeta3',
        titulo: 'Burger WARREN la recomendada del día',
        texto: 'Dos medallones de 100 gr de pollo, doble queso cheddar, tomate, lechuga y nuestra exquisita salsa Ronnie.',
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