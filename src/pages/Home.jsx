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
                titulo={'Conectando Cannabis con la Comunidad'}
                descripccion={'Desde la Fundación buscamos contribuir a toda la cadena de producción y suministro de cannabis terapéutico y cáñamo, aportar valor bio-económico, ayudar al desarrollo de la salud física, mental y espiritual de las personas y reconectar con la naturaleza de manera íntegra y sinérgica para el mayor bienestar.'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer className="footer" />

        </>
    )
}

export default Home