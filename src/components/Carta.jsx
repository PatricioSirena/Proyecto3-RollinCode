import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Carta = ({ titulo, text, imgSource, url }) => {
    return (
        <Card className= 'text-center m-2' style={{ width: '25rem', }}>
            <Card.Img variant="top" src={imgSource? imgSource : 'La imagen es requerida'} /> 
            <Card.Body>
                <Card.Title>{titulo ? titulo : 'Pone el titulo carnero astudo'}</Card.Title>
                <Card.Text>
                    {text ? text : 'El texto es requerido'}
                </Card.Text>
                <Button className='btn-dark' variant="primary">
                    <Link to={url ? url : '#!'} target='_blank' rel='noreferrer'>Sin miedo al exito</Link>
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

// {imgSource ? imgSource : 'La imagen es requerida'}