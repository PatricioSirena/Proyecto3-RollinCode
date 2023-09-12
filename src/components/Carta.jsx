import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const Carta = ({ titulo, text, imgSource, url }) => {
    return (
        <Card className= 'carta text-center' style={{ width: '100%'}}>
            <Card.Img variant="top" src={imgSource? imgSource : 'La imagen es requerida'} /> 
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
    imgSource: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default Carta

//18rem carta