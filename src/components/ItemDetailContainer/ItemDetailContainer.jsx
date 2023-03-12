import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const [ vehicle, setVehicle ] =  useState({})
  const { idItem } = useParams()

    useEffect(()=>{     
      const db = getFirestore() 
      const query = doc(db, 'vehicles', idItem)
      getDoc(query)
      .then(resp => setVehicle( { id: resp.id, ...resp.data() } ))
      .catch(error => setVehicle(error))
    }, [])


  return (
    <div>
      <ItemDetail vehicle={vehicle}/>
    </div>
  )
}