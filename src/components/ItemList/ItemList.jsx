import React, { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo (({vehicles}) => {
  return (
    vehicles.map(vehicle =>  <Item key={vehicle.id} vehicle={vehicle}/>)
  )
}
)
export default ItemList