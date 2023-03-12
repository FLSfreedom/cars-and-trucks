import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"

const CartForm = () => {
    const {VehiclesCartList, clear, totalPrice} = useCartContext() 
    const [orderId, setOrderId] = useState()
    const [formData, setFormData] = useState( {
        name: '',
        phone: '',
        email:'',
        confirmEmail: ''
    } )
    const insertOrder = (evt) => {
        evt.preventDefault()
        const order = {}
            if(formData.email !== formData.confirmEmail){    
                alert('Las direcciones de e-mail ingresadas no coinciden entre sí');
            }else if(formData.email, formData.confirmEmail, formData.phone, formData.name == ''){
                alert('Completar todos los campos');
            } else {
                order.comprador = formData
                order.isActive = true
                order.seleccion = VehiclesCartList.map(({id, name, price, quantity}) => ({id, name, price, quantity}))
                order.total = totalPrice()

                const db = getFirestore()
                const ordersCollection = collection(db, 'orders')                
                addDoc(ordersCollection, order)
                .then(resp => setOrderId(resp.id))
                .catch(err => console.log(err))
                .finally(() => {
                    clear()
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        confirmEmail: ''
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
        <center className="">
            <div >
                <h5>Ingresar datos del comprador</h5>
            </div>
            <form onSubmit={insertOrder} className="mb-3" style={{width: '85%'}}>
                <input className='form-control'
                    type="text" 
                    name="name"          
                    placeholder = "Nombre y apellido"   
                    onChange={handleOnChange} 
                    value={formData.name}
                />
                <br />
                <input className='form-control'
                    type="tel" 
                    name="phone"         
                    placeholder = "Teléfono" 
                    onChange={handleOnChange} 
                    value={formData.phone}
                    />
                <br />
                <input className='form-control'
                    type="email" 
                    name="email"         
                    placeholder = "E-mail"    
                    onChange={handleOnChange} 
                    value={formData.email}
                    />
                <br />
                <input className='form-control'
                    type="email" 
                    name="confirmEmail"  
                    placeholder = "Confirmar e-mail"    
                    onChange={handleOnChange} 
                    value={formData.confirmEmail}
                    />
                <br />
                <button className="btn btn-success" type="submit">¡Comprar!</button>
            </form>
            <div className="">
                <button className="btn btn-outline-danger" onClick={clear}>Vaciar</button>
            </div>
            <div style={{
                margin: '2%',
                color: '#007ee5'
            }}>    
                {orderId !== '' && <h5>Código de orden de compra: {orderId}</h5>}
            </div>
        </center>
    )
}

export default CartForm