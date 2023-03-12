import { createContext, useContext, useState } from 'react'

export const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({children}) => {
    const [ VehiclesCartList, setVehiclesCartList] = useState([])

    const addToCart = (newVehicle) => {
        const idVehicleCart = VehiclesCartList.findIndex(vehicle => vehicle.id === newVehicle.id)
        if(idVehicleCart !== -1) {
            VehiclesCartList[idVehicleCart].quantity += newVehicle.quantity
            setVehiclesCartList([...VehiclesCartList])
            return
        }
        setVehiclesCartList([
            ... VehiclesCartList,
            newVehicle
        ])
    }

    const totalPrice = () => VehiclesCartList.reduce( (count, vehicle) => count += (vehicle.quantity * vehicle.price), 0)
    const totalAmount = () => VehiclesCartList.reduce( (count, vehicle) => count + vehicle.quantity, 0)
    const deleteVehicle = (id) => setVehiclesCartList(VehiclesCartList.filter(vehicle => vehicle.id !== id))
    const clear = () => setVehiclesCartList ([])

    return (
        <CartContext.Provider value={{
            VehiclesCartList,
            addToCart,
            totalPrice,
            totalAmount,
            deleteVehicle,
            clear
        }}>
            {children}
        </CartContext.Provider>
    )
}
