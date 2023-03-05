import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [ ListaCart, setListaCart] = useState([])
    const agregarACart = (nuevoVehiculo) => {
        setListaCart([
            ... ListaCart,
            nuevoVehiculo
        ])
    }

    const total = () => ListaCart.reduce( (contador, vehiculo) => contador += vehiculo.cantidad, 0)

    const vaciar = () => setListaCart ([])

    return (
        <CartContext.Provider value={{
            ListaCart,
            agregarACart,
            total,
            vaciar
        }}>
            {children}
        </CartContext.Provider>
    )
}
