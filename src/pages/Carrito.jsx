import { useContext } from "react";
import { CarritoContexto } from "../context/ContextoCarrito";

const Carrito = () => {

    const [carrito, setCarrito] = useContext(CarritoContexto);

    const cantidad = carrito.reduce((acumulador, actual) => {
        return acumulador + actual.quantity;
    }, 0);

    const precioTotal = carrito.reduce((acumulador, actual) => {
        return acumulador + actual.quantity * actual.precio;
    }, 0);

    return (
        <div className="contenedor-carrito text-center">
        <div>Items en el carrito: {carrito} + {cantidad}</div>
        <br />
        <div>Total: ${precioTotal}</div>
        <br />
        <button onClick={() => console.log(carrito)}>Checkout</button>
        </div>
    )
}

export default Carrito