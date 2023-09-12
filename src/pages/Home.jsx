import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Portada from "../components/Portada";
import Cartas from "../components/Cartas";
import TarjetasInfo from "../components/TarjetasInfo";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Portada
                className=' animate__zoomInLeft'
                titulo={'Bienvenido a HappyFood'}
                descripccion={'Somos una Fundación construyendo una red para conectar pacientes, médicos, cultivadores, científicos, académicos y organismos del Estado. A través de este proyecto buscamos generar un espacio weed friendly para compartir momentos, recetas y experiencias!'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer className="footer" />
        </>
    )
}

export default Home