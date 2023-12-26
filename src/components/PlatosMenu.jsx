import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'
import { CarritoContexto } from '../context/ContextoCarrito';
import '../styles/platosmenu.css';
import { CardImg } from 'react-bootstrap';
import carritoBlanco from'../img/carrito-blanco.jpg'



const PlatosMenu = ({ titulo, text, imgSource, precio, id, isLogueado }) => {

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
                return [...itemActual, { id, titulo, quantity: 1, precio }];
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

        <Card className='cartaaaa-menu text-center mt-3' style={{ width: '21rem', height: '27rem' }}>
            <CardImg className='imagen-menu' variant="top" src={imgSource ? imgSource : 'La imagen es requerida'} ></CardImg>

            <div className="card-info">
                <Card.Title className='text-title'>{titulo ? titulo : 'Pone el titulo carnero astudo'}</Card.Title>
                <p className='text-body'>{text ? text : 'El texto es requerido'}</p>
            </div>
            {isLogueado?
            <div className="card-footer">
                <span className="priceItem">${precio ? precio : 'El precio es requerido'}</span>

                {cantidadPorItem >= 0 && (
                    <Button className="card-button" onClick={() => agregarAlCarrito()}>
                        <img src={carritoBlanco} className='svg-icon' alt="" />
                    </Button>
                )
                }
                {
                    cantidadPorItem > 0 && (
                        <Button className='card-button' onClick={() => removerDelCarrito(id)}>
                            <span className='textoEliminar'>Eliminar</span>
                        </Button>
                    )
                }
                {cantidadPorItem > 0 && (
                    <div className='itemCantidad'>{cantidadPorItem}</div>)}
            </div>
            : <span>Debe loguearse para poder agrear platos al carrito</span>}
        </Card>
    );
}

PlatosMenu.propTypes = {
    titulo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default PlatosMenu
