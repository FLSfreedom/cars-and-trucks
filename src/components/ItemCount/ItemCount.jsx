import React, { useState } from 'react'

export const ItemCount = ({initial=1, stock=3, onAdd}) => {
  const [ contador, setContador] = useState(initial)

  const handleSumatoria = () =>{
    if (contador < stock){
      setContador(contador + 1)
    }
  }
  const handleResta = () =>{
    if (contador > initial){
      setContador(contador - 1)
    }
  }
  const handleOnAdd = () =>{
    onAdd(contador)
  }
  return (
    <div className="d-grid d-flex gap-2">      
      <button className="btn btn-secondary" type="button" onClick={handleResta}>-</button>
      <center>
        <label>{contador}</label>
      </center>
      <button className="btn btn-secondary" type="button" onClick={handleSumatoria}>+</button>
      <button className="btn btn-success" type="button" onClick={handleOnAdd}>Agregar a carrito</button>
    </div>
  )
}
