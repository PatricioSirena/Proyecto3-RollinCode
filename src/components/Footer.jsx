import MapaFormulario from "./MapaFormulario";
import Redes from "./Redes";

const Footer = () => {
    return (
        <footer className="bg-dark text-white footer">
            <MapaFormulario />
            <Redes />
            <div className="copyright text-center">
                <span>
                    &copy;2023, All right reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer