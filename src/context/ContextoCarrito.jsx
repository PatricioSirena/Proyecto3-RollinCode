import { createContext, useState } from "react"

export const CarritoContexto = createContext({});

const ContextoCarrito = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    return (
        <CarritoContexto.Provider value={[carrito, setCarrito]}>
            {children}
        </CarritoContexto.Provider>
    )
};

export default ContextoCarrito