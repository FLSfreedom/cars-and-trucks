import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"

const CartForm = () => {
    const {ListaCart, vaciar, totalPrecio} = useCartContext() 
    const [isId, setIsId] = useState()
    const [formData, setFormData] = useState( {
        name: '',
        phone: '',
        email:'',
        confirmarEmail: ''
    } )
    const insertarOrden = (evt) => {
        evt.preventDefault()
        const orden = {}
            if(formData.email !== formData.confirmarEmail){    
                alert('Las direcciones de e-mail ingresadas no coinciden entre sí');
            }else{
                orden.comprador = formData
                orden.isActive = true
                orden.seleccion = ListaCart.map(({id, nombre, precio, cantidad}) => ({id, nombre, precio, cantidad}))
                orden.total = totalPrecio()

                const db = getFirestore()
                const coleccionOrdenes = collection(db, 'ordenes')                
                addDoc(coleccionOrdenes, orden)
                .then(resp => setIsId(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    vaciar()
                    setFormData({
                        name: '',
                        phone: '',
                        email:'',
                        confirmarEmail: ''
                    })
                })
            }
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            })
    }
    return (
        <div className="">
            <div className="">
                <h5>Ingresar datos del comprador</h5>
            </div>
            <form onSubmit={insertarOrden} >
                <input className=''
                    type="text" 
                    name="name"          
                    placeholder = "Nombre y apellido"   
                    onChange={handleOnChange} 
                    value={formData.name}
                />
                <br />
                <input className=''
                    type="tel" 
                    name="phone"         
                    placeholder = "Teléfono" 
                    onChange={handleOnChange} 
                    value={formData.phone}
                    />
                <br />
                <input className=''
                    type="email" 
                    name="email"         
                    placeholder = "E-mail"    
                    onChange={handleOnChange} 
                    value={formData.email}
                    />
                <br />
                <input className=''
                    type="email" 
                    name="confirmarEmail"  
                    placeholder = "Confirmar e-mail"    
                    onChange={handleOnChange} 
                    value={formData.confirmarEmail}
                    />
                <br />
                <button className="btn btn-success" type="submit">¡Comprar!</button>
            </form>
            <div className="">
                <button className="btn btn-outline-danger" onClick={vaciar}>Vaciar</button>
            </div>
            <div className="">    
                {isId !== '' && <h5>Código de orden de compra es: {isId}</h5>}
            </div>
        </div>
    )
}

export default CartForm