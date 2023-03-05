import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const CartContainer = () => {
    const { ListaCart, vaciar } = useCartContext()
  return (
    <div>
        { ListaCart.map(vehiculo => (
            <div key={vehiculo.id}>
                <img src={vehiculo.imagen} style={{width: 150, marginLeft: 10, marginTop: 10}}/>
                <div style={{display: 'inline-block', marginLeft: 10, marginRight: 10}}>
                   <div style={{display: 'inline-block', fontWeight: 'bold'}}>{vehiculo.nombre}</div> - Cantidad: {vehiculo.cantidad} - Precio: {vehiculo.precio} {vehiculo.moneda}
                </div>              
            </div>
        )
        )            
        }
        <center>
          <button onClick={vaciar} className="btn btn-outline-danger" style={{margin: 20}}>Vaciar</button>                        
        </center>
    </div>
  )
}

export default CartContainer