import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const Carta = ({ titulo, text, imgSource, url }) => {
    return (
        <Card className='carta-index text-center bg-transparent border-dark'>
            <Card.Img className='imagen-carta-principal' src={imgSource ? imgSource : 'La imagen es requerida'} />
            <Card.Body className='cuerpoTarjeta'>
                <Card.Title className='tituloCarta'>{titulo ? titulo : 'El título es requerido'}</Card.Title>
                <Card.Text className='textoCarta'>
                    {text ? text : 'El texto es requerido'}
                </Card.Text>
                <Button className='btn-dark botonCarta' variant="primary">
                    <a href={url ? url : '#!'} target='_blank' rel='noreferrer'>Ver Todo!</a>
                </Button>
            </Card.Body>
        </Card>
    );
}

Carta.propTypes = {
    titulo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgSource: PropTypes.string,
    url: PropTypes.string
}

export default Carta