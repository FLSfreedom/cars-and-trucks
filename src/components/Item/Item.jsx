import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Item = memo ( ({vehiculo}) => {
  return (
    <Link to={`/Item/${vehiculo.id}`}>
        <div key={vehiculo.id} className="card" styles="width: 18rem;">                                            
            <img src={vehiculo.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4>{vehiculo.nombre}</h4>
                <h5>${vehiculo.precio} {vehiculo.moneda}</h5>
                <p className="card-text"></p>
            </div>                                                                                      
        </div>
    </Link>
  )
}
)

export default Item