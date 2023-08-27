// import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';
import imagen3 from "../assets/img/flores.webp";

const TarjetaInfoDerecha = () => {
    return (
        <div className="container-fluid">
            <div className="row tarjetaInfo">
                <div className="col-lg-5">
                    <Card.Img className="imagenTarjeta" src={imagen3} />
                </div>
                <div className="col-lg-7">
                    <h3>Titulo de prueba derecha</h3>
                    <p>Texto de prueba derecha</p>
                </div>
            </div>
        </div>
    )
}

// TarjetaInfoDerecha.propTypes = {
//     titulo: PropTypes.string,
//     texto: PropTypes.string,
//     imgSource: PropTypes.string
// }

export default TarjetaInfoDerecha