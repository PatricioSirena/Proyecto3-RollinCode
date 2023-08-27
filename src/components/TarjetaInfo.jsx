import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';

const TarjetaInfo = ({ titulo, texto, imgSource }) => {
    return (
        <div className="container-fluid">
            <div className="row tarjetaInfo">
                <div className="col-lg-7">
                    <h3>{titulo ? titulo : 'Debe ingresar un titulo'}</h3>
                    <p>{texto ? texto : 'El texto es requerido'}</p>
                </div>
                <div className="col-lg-5">
                    <Card.Img className="imagenTarjeta" src={imgSource ? imgSource : 'Debe ingresar una imagen'} />
                </div>
            </div>
        </div>
    )
}

TarjetaInfo.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired
}

export default TarjetaInfo