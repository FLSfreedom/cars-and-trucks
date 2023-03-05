import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { gFetchCategoria } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'

const Cargando = () => {
  return <h2>Cargando...</h2>
}

export const ItemListContainer = ({Greetings}) => {
  const [ listaVehiculos, setVehiculos ] = useState ([]) 
  const [ cargando, setCargando ] = useState(true)

  const { idCategory }=useParams()

  useEffect(()=>{
    if (idCategory) {
      gFetchCategoria()
      .then(res => {
        setVehiculos(res.filter(vehiculo => vehiculo.categoria == idCategory))
      })
      .catch(error => console.log(error))
      .finally(()=> setCargando(false))
    } else {
      gFetchCategoria()
      .then(res => {
        setVehiculos(res)
      })
      .catch(error => console.log(error))
      .finally(()=> setCargando(false))
    }
  }, [idCategory])

  return (
    <center>
      <div className="contenedorPrincipal">
        <h2 className="tituloGreetings">{Greetings}</h2>
      </div>
      { cargando ? <Cargando/>
        :
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}>
          <ItemList listaVehiculos={listaVehiculos}/>
        </div>
      }
    </center>
  )
}