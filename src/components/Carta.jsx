import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const Carta = ({ titulo, text, imgSource, url }) => {
    return (
        <Card className='carta-index text-center bg-transparent border-dark' style={{ width: '290px' }}>
            <Card.Img className='imagen-carta-principal' style={{height: '250px'}} src={imgSource ? imgSource : 'La imagen es requerida'} />
            <Card.Body>
                <Card.Title>{titulo ? titulo : 'Pone el titulo carnero astudo'}</Card.Title>
                <Card.Text>
                    {text ? text : 'El texto es requerido'}
                </Card.Text>
                <Button className='btn-dark' variant="primary">
                    <a href={url ? url : '#!'} target='_blank' rel='noreferrer'>Ver más</a>
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