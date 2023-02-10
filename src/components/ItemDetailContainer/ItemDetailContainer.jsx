import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetchDetalle } from "../../utils/gFetch"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
  const [ vehiculo, setVehiculo ] =  useState({})
    const { idItem } = useParams()

    useEffect(()=>{        
        gFetchDetalle(idItem)
        .then(response => setVehiculo(response))
        .catch(error => setVehiculo(error))
    }, [])


  return (
    <div>
      <ItemDetail vehiculo={vehiculo}/>
    </div>
  )
}