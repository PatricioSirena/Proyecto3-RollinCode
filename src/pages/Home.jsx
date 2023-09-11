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
                titulo={'Bienvenido/a'}
                descripccion={'Soy una descripción de prueba para ver si todo funciona bien!'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer className="footer" />
        </>
    )
}

export default Home