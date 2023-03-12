import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const Item = memo ( ({vehicle}) => {
  return (
    <Link to={`/Item/${vehicle.id}`}>
        <div key={vehicle.id} className="card" styles="width: 18rem;">                                            
            <img src={vehicle.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h4>{vehicle.name}</h4>
                <h5>${vehicle.price} {vehicle.currency}</h5>
                <p className="card-text"></p>
            </div>                                                                                      
        </div>
    </Link>
  )
}
)

export default Item