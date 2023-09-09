import Portada from "../components/Portada";
import Cartas from "../components/Cartas";
import TarjetasInfo from "../components/TarjetasInfo";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Portada
                titulo={'Titulo'}
                descripccion={'soy una descripccion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien! soy una descripccion de prueba para ver si todo funciona bien!'} />
            <section className='d-flex justify-content-around'>
                <Cartas />
            </section>
            <TarjetasInfo />
            <Footer className="footer" />
        </>
    )
}

export default Home