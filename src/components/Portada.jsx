import Button from 'react-bootstrap/Button';
import portada from '../assets/img/portada.jpg'


const Portada = ({ titulo, descripccion }) => {
    return (
        <div>
            <div>
                <div className="col-lg-4 mb-5 portada-descripccion">
                    <img src={portada} alt="Portada" className='portada_home' />
                    <h1 className='mt-3'>{ titulo }</h1>
                    <p className="mb-5"> { descripccion } </p>
                    <Button className='boton-portada mt-5' variant="outline-light">Click</Button>
                </div>
            </div>
        </div>
    );
}



export default Portada

//className="col-lg-8 portada-imagen" className="row portada" 
/*<div>
    imagen            
</div>*/