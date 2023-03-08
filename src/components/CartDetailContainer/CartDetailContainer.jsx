import React from 'react'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { useCartContext } from '../../Context/CartContext'

const CartDetailContainer = () => {
  
  const insertaOrden = (evt) => {
    evt.preventDefault()
    const orden = {}
    orden.comprador = {nombre: 'Juan', telefono: '5411325418', email: 'juanjjuan@gmail.com'}
    orden.seleccion = ListaCart.map(({id, nombre, precio, cantidad}) => ({id, nombre, precio, cantidad}))
    orden.total = totalPrecio()
    
    const db = getFirestore()
    const coleccionOrdenes = collection(db, 'ordenes')
    
    addDoc(coleccionOrdenes, orden)
    .then(resp => console.log(resp))
    
    console.log(orden)
  }

  const { ListaCart, vaciar, totalPrecio, eliminarVehiculo } = useCartContext()
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
        <center>
          <button onClick={insertaOrden} className="btn btn-success" style={{margin: 20}}>Generar orden</button>   
          <button onClick={vaciar} className="btn btn-outline-danger" style={{margin: 20}}>Vaciar</button>                      
        </center>
    </div>
  )
}

export default CartDetailContainer