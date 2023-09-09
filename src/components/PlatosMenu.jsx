import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

const PlatosMenu = ({ titulo, text, imgSource, precio }) => {
    return (
        <Card className= 'text-center' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgSource? imgSource : 'La imagen es requerida'} /> 
            <Card.Body>
                <Card.Title>{titulo ? titulo : 'Pone el titulo carnero astudo'}</Card.Title>
                <Card.Text>
                    {text ? text : 'El texto es requerido'}
                </Card.Text>
                <Card.Text>
                    ${precio ? precio : 'El precio es requerido'}
                </Card.Text>
                <Button className='btn-dark' variant="primary" onClick={() => addToCart()}>
                    Agregar
                </Button>
            </Card.Body>
        </Card>
    );
}

PlatosMenu.propTypes = {
    titulo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default PlatosMenu
