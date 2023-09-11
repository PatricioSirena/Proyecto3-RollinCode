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
            <div>
                <h3>Items en el carrito:</h3>
                {
                    carrito.map((item) => {
                        return <li key={item.id}>
                            {item.titulo}
                        </li>
                    })
                }
                <div className="mt-3">
                    <h5>Cantidad total:</h5>
                </div>
                {cantidad}
            </div>
            <br />
            <div>Total: ${precioTotal}</div>
            <br />
            <button onClick={() => console.log(carrito)}>Checkout</button>
        </div>
    )
}

export default Carrito