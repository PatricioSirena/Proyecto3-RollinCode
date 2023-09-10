import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'
import { CarritoContexto } from '../context/ContextoCarrito';


const PlatosMenu = ({ titulo, text, imgSource, precio, id }) => {

    const [carrito, setCarrito] = useContext(CarritoContexto);

    const agregarAlCarrito = () => {
        setCarrito((itemActual) => {
            const itemEncontrado = itemActual.find((item) => item.id === id);
            if (itemEncontrado) {
                return itemActual.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...itemActual, { id, quantity: 1, titulo, precio }];
            }
        });
    };

    const removerDelCarrito = (id) => {
        setCarrito((itemActual) => {
            if (itemActual.find((item) => item.id === id)?.quantity === 1) {
                return itemActual.filter((item) => item.id !== id);
            } else {
                return itemActual.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const cantidadPorId = (id) => {
        return carrito.find((item) => item.id === id)?.quantity || 0
    };

    const cantidadPorItem = cantidadPorId(id);

    return (
        <Card className='text-center' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imgSource ? imgSource : 'La imagen es requerida'} />
            <Card.Body>
                <Card.Title>{titulo ? titulo : 'Pone el titulo carnero astudo'}</Card.Title>
                <Card.Text>
                    {text ? text : 'El texto es requerido'}
                </Card.Text>
                <Card.Text>
                    ${precio ? precio : 'El precio es requerido'}
                </Card.Text>
                {
                    cantidadPorItem >= 0 && (
                        <Button className='btn-dark m-1' onClick={() => agregarAlCarrito()}>
                            + Agregar
                        </Button>
                    ) 
                }
                {
                    cantidadPorItem > 0 && (
                        <Button className='btn-dark m-1' onClick={() => removerDelCarrito(id)}>
                        - Eliminar
                    </Button>
                    )
                }
                <div>
                    {cantidadPorItem > 0 && (
                        <div>{cantidadPorItem}</div>)}
                </div>
            </Card.Body>
        </Card>
    );
}

PlatosMenu.propTypes = {
    titulo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    url: PropTypes.string
}

export default PlatosMenu
