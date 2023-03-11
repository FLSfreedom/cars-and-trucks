import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({children}) => {
    const [ ListaCart, setListaCart] = useState([])

    const agregarACart = (nuevoVehiculo) => {
        const idVehiculoCart = ListaCart.findIndex(vehiculo => vehiculo.id === nuevoVehiculo.id)
        if(idVehiculoCart !== -1) {
            ListaCart[idVehiculoCart].cantidad += nuevoVehiculo.cantidad
            setListaCart([...ListaCart])
            return
        }
        setListaCart([
            ... ListaCart,
            nuevoVehiculo
        ])
    }

    const totalPrecio = () => ListaCart.reduce( (contador, vehiculo) => contador += (vehiculo.cantidad * vehiculo.precio), 0)
    const totalCantidad = () => ListaCart.reduce( (contador, vehiculo) => contador + vehiculo.cantidad, 0)
    const eliminarVehiculo = (id) => setListaCart(ListaCart.filter(vehiculo => vehiculo.id !== id))
    const vaciar = () => setListaCart ([])

    return (
        <CartContext.Provider value={{
            ListaCart,
            agregarACart,
            totalPrecio,
            totalCantidad,
            eliminarVehiculo,
            vaciar
        }}>
            {children}
        </CartContext.Provider>
    )
}
