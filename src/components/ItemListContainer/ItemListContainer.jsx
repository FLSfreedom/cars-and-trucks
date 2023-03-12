import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import '../ItemListContainer/ItemListContainer.css'

const Loading = () => {
  return <h2>Cargando...</h2>
}

export const ItemListContainer = ({Greetings}) => {
  const [vehicles, setVehicles] = useState([])

  const [ loading, setLoading ] = useState(true)

  const { idCategory }=useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollections = collection(db, 'vehicles')
    const queryFilter = idCategory ? query(queryCollections, where('category','==', idCategory) ) : queryCollections 
    getDocs(queryFilter)
    .then(resp =>setVehicles(resp.docs.map(vehicle=>({id: vehicle.id,...vehicle.data()}))))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))
  },[idCategory])

  return (
    <center>
      <div>
        <h2 className="titleGreetings">{Greetings}</h2>
      </div>
      { loading ? <Loading/>
        :
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap'
        }}>
          <ItemList vehicles={vehicles}/>
        </div>
      }
    </center>
  )
}