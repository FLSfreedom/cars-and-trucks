import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const CartDetailContainer = () => {
  const { ListaCart, totalPrecio, eliminarVehiculo } = useCartContext()
  return (
    <div>
        { ListaCart.map(nuevoVehiculo => (
            <div key={nuevoVehiculo.id}>
                <img src={nuevoVehiculo.imagen} style={{width: 150, marginLeft: 10, marginTop: 10}}/>
                <div style={{display: 'inline-block', marginLeft: 10, marginRight: 10}}>
                   <div style={{display: 'inline-block', fontWeight: 'bold'}}>{nuevoVehiculo.nombre}</div> - Cantidad: {nuevoVehiculo.cantidad} - Precio: {nuevoVehiculo.precio * nuevoVehiculo.cantidad} {nuevoVehiculo.moneda}
                </div>
                <div>
                  <button className="btn btn-danger" onClick={()=> eliminarVehiculo(nuevoVehiculo.id)}> Eliminar vehiculo</button>
                </div>             
            </div>
        )
        )            
        }
        <center>
          <h4>{totalPrecio() !== 0 && `Precio Total es: $ ${totalPrecio()}`}</h4>
        </center>
    </div>
  )
}

export default CartDetailContainer