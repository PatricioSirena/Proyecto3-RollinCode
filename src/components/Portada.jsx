import Button from 'react-bootstrap/Button';
import portada from '../assets/img/portada.jpg'
import PropTypes from "prop-types";


const Portada = ({ titulo, descripccion }) => {
    return (
        <div className="container-fluid">
            <div className="row portada">
                <div className="col-lg-8 portada-imagen">
                    <img src={portada} alt="" />
                </div>
                <div className="col-lg-4 mb-5 portada-descripccion">
                    <h1 className='mt-3'>{ titulo }</h1>
                    <p className="mb-5"> { descripccion } </p>
                    <Button className='boton-portada mt-5' variant="outline-dark">Dark</Button>
                </div>
            </div>
        </div>
    );
}

Portada.propTypes = {
    titulo:PropTypes.string.isRequired,
    descripccion:PropTypes.string.isRequired
};

export default Portada