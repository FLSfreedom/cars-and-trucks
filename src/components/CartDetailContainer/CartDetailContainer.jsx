import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const CartDetailContainer = () => {
  const { VehiclesCartList, totalPrice, deleteVehicle } = useCartContext()
  return (
    <div>
        { VehiclesCartList.map(newVehicle => (
            <div key={newVehicle.id}>
                <img src={newVehicle.image} style={{width: 150, marginLeft: 10, marginTop: 10}}/>
                <div style={{display: 'inline-block', marginLeft: 10, marginRight: 10}}>
                   <div style={{display: 'inline-block', fontWeight: 'bold'}}>{newVehicle.name}</div> - Cantidad: {newVehicle.quantity} - Precio: {newVehicle.price * newVehicle.quantity} {newVehicle.currency}
                </div>
                <div>
                  <button className="btn btn-outline-danger" onClick={()=> deleteVehicle(newVehicle.id)} style={{
                    margin: '1%'
                  }}> Eliminar vehiculo</button>
                </div>             
            </div>
        )
        )            
        }
        <center>
          <h4>{totalPrice() !== 0 && `Precio total de compra: $ ${totalPrice()}`}</h4>
        </center>
    </div>
  )
}

export default CartDetailContainer