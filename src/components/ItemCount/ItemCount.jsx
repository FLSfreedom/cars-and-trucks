import React, { useState } from 'react'

export const ItemCount = ({initial=1, stock=10, onAdd}) => {
  const [ count, setCount] = useState(initial)

  const handleAddition = () =>{
    if (count < stock){
      setCount(count + 1)
    }
  }
  const handleTakeoff = () =>{
    if (count > initial){
      setCount(count - 1)
    }
  }
  const handleOnAdd = () =>{
    onAdd(count)
  }
  return (
    <div className="d-grid d-flex gap-2">      
      <button className="btn btn-secondary" type="button" onClick={handleTakeoff}>-</button>
      <center>
        <label>{count}</label>
      </center>
      <button className="btn btn-secondary" type="button" onClick={handleAddition}>+</button>
      <button className="btn btn-success" type="button" onClick={handleOnAdd}>Agregar a carrito</button>
    </div>
  )
}
