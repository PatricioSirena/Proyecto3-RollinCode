import MapaFormulario from "./MapaFormulario";
import Redes from "./Redes";

const Footer = () => {
    return (
        <footer className="bg-dark text-white footer">
            <MapaFormulario />
            <Redes />
            <div className="copyright text-center mb-4">
                <span>
                    &copy;2023, GameSquad. All right reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer