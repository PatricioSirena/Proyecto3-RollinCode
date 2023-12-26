import MapaFormulario from "./MapaFormulario";
import Redes from "./Redes";

const Footer = () => {
    return (
        <footer className="bg-dark text-white footer">
            <MapaFormulario />
            <Redes />
            <div className="text-center mb-3">
                <span className="copyright">
                    &copy;2023, All right reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer