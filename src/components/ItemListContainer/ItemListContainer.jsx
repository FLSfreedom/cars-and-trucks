import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { gFetchCategoria } from '../../utils/gFetch'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import '../ItemListContainer/ItemListContainer.css'

const Cargando = () => {
  return <h2>Cargando...</h2>
}

export const ItemListContainer = ({Greetings}) => {
  const [ vehiculos, setVehiculos ] = useState ([]) 
  const [ cargando, setCargando ] = useState(true)

  const { idCategory }=useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollections = collection(db, 'vehiculos')
    const queryFilter = idCategory ? query(queryCollections, where('categoria','==', idCategory) ) : queryCollections 
    getDocs(queryFilter)
    .then(resp =>setVehiculos(resp.docs.map(vehiculo=>({id: vehiculo.id,...vehiculo.data()}))))
    .catch(err => console.log(err))
    .finally(()=>setCargando(false))
  },[idCategory])
  console.log(vehiculos)

//
//  useEffect(()=>{
//    if (idCategory) {
//      gFetchCategoria()
//      .then(res => {
//        setVehiculos(res.filter(vehiculo => vehiculo.categoria == idCategory))
//      })
//      .catch(error => console.log(error))
//      .finally(()=> setCargando(false))
//    } else {
//      gFetchCategoria()
//      .then(res => {
//        setVehiculos(res)
//      })
//      .catch(error => console.log(error))
//      .finally(()=> setCargando(false))
//    }
//  }, [idCategory])
//

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
          <ItemList vehiculos={vehiculos}/>
        </div>
      }
    </center>
  )
}