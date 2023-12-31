import TarjetaInfo from "./TarjetaInfo";
import imagen1 from "../img/POrg.jpg";
import imagen2 from "../img/Cerv.jpg";
import imagen3 from "../img/Flores.jpg";


const tarjetas = [
    {
        id: 'tarjeta1',
        titulo: 'Productos orgánicos de Productores regionales',
        texto: 'Todos nuestros platos estan realizados con productos orgánicos y libres de pesticidas, provenientes de granjas y cultivos regionales.',
        imagen: imagen1
    },
    {
        id: 'tarjeta2',
        titulo: 'Cervezas Artesanales',
        texto: 'Contamos con una amplia variedad de Cervezas Artesanales y opciones libres de TACC.',
        imagen: imagen2
    },
    {
        id: 'tarjeta3',
        titulo: 'Cultivo Seguro',
        texto: 'Trabajamos con sustratos y productos orgánicos para asegurar calidad y trazabilidad en nuestros cultivos',
        imagen: imagen3
    }
]


const TarjetasInfo = () => {
    return (
        <>
            {
                tarjetas.map(tarjeta => (
                    <div className="mt-5" key={tarjeta.id}>
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