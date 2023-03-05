import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import CartContainer from '../CartContainer/CartContainer'
import { ItemCount } from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'


const Componente = ()=> {
    return (
        <div style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'rgb(7, 114, 255',
            display: 'absolute',
            float: 'right',
            borderRadius: 15,
            color: 'white'
        }}>
            <div>
               <CartContainer/>
            </div>
            <button className='btn btn-success' style={{margin: 20}}><Link to="/cart" style={{color: 'white'}}>Completar la compra</Link></button>
        </div>
    )
}


export const ItemDetail = ({vehiculo}) => {

    const [isCount, setIsCount] = useState(true)
    const [cart, setCart] = useState(false)

    const { agregarACart } = useCartContext()
    const onAdd = (Qcant) => {
        console.log(Qcant)
        agregarACart ({ ... vehiculo, cantidad: Qcant})
        setIsCount(false)
    }

    const handleCart = () => {
        setCart(!cart)
    }

  return (
    <div className="estiloDetalle">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3500">
                    <img src={vehiculo.imagen} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/llave-compra.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div>
                    <button className='btn btn-primary' style={{margin: 10}} onClick={handleCart}>Verificar carrito</button>
                    {
                        isCount ? 
                            <ItemCount initial={1} stock={30} onAdd={onAdd} />                        
                        :
                            <h4>¡El vehiculo fue agregado!</h4>
                    }   
                    {
                        cart && <Componente />
                    }
        </div>
        <h6>Categoría: {vehiculo.categoria}</h6> 
        <h2>{vehiculo.nombre}</h2> 
        <h4>Precio: {vehiculo.precio} {vehiculo.moneda}</h4>            
    </div>
  )
}
