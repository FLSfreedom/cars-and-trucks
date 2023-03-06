import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo (({vehiculos}) => {
  return (
    vehiculos.map(vehiculo =>  <Item key={vehiculo.id} vehiculo={vehiculo}/>)
  )
}
)
export default ItemList