import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const [ vehiculo, setVehiculo ] =  useState({})
  const { idItem } = useParams()

    useEffect(()=>{     
      const db = getFirestore() 
      const query = doc(db, 'vehiculos', idItem)
      getDoc(query)
      .then(resp => setVehiculo( { id: resp.id, ...resp.data() } ))
      .catch(error => setVehiculo(error))
    }, [])


  return (
    <div>
      <ItemDetail vehiculo={vehiculo}/>
    </div>
  )
}