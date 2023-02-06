import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { gFetch } from '../../utils/gFetch'
import '../ItemListContainer/ItemListContainer.css'

export const ItemListContainer = ({Greetings}) => {
  const [ listaVehiculos, setVehiculos ] = useState ([]) 
  const [ cargando, setCargando ] = useState(true)

  const { idCategory }=useParams()

  useEffect(()=>{
    if (idCategory) {
      gFetch()
      .then(res => {
        setVehiculos(res.filter(vehiculo => vehiculo.categoria == idCategory))
      })
      .catch(error => console.log(error))
      .finally(()=> setCargando(false))
    } else {
      gFetch()
      .then(res => {
        setVehiculos(res)
      })
      .catch(error => console.log(error))
      .finally(()=> setCargando(false))
    }
  }, [idCategory])

  console.log(idCategory)

  return (
    <center>
      <div className="contenedorPrincipal">
        <h2 className="tituloGreetings">{Greetings}</h2>
      </div>
      { cargando ? <h2>Cargando...</h2>
        :
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}>
        { listaVehiculos.map(vehiculo =>  <Link to={`/Item/${vehiculo.id}`}>
                                            <div key={vehiculo.id} className="card" styles="width: 18rem;">                                            
                                              <img src={vehiculo.imagen} className="card-img-top" alt="..."/>
                                              <div className="card-body">
                                                <p className="card-text">{vehiculo.categoria}</p>
                                                <h4>{vehiculo.nombre}</h4>
                                                <h5>${vehiculo.precio}</h5>
                                                <p className="card-text"></p>
                                              </div>                                                                                      
                                            </div>
                                          </Link>  
                            )}
        </div>
      }
    </center>
  )
}