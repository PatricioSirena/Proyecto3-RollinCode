import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';

const TarjetaInfo = ({id, titulo, texto, imgSource }) => {
    return (
        <div className="container-fluid">
            <div className="row tarjetaInfo d-flex" id={id? id: 'Ponele un id culiao'}>
                <div className="col-lg-7 uno">
                    <h3>{titulo ? titulo : 'Debe ingresar un titulo'}</h3>
                    <p>{texto ? texto : 'El texto es requerido'}</p>
                </div>
                <div className="col-lg-5 dos">
                    <Card.Img className="imagenTarjeta" src={imgSource ? imgSource : 'Debe ingresar una imagen'} />
                </div>
            </div>
        </div>
    )
}

TarjetaInfo.propTypes = {
    id: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired
}

export default TarjetaInfo