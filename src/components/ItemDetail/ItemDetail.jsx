import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import CartInDetail from '../CartInDetail/CartInDetail'
import { ItemCount } from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'


export const ItemDetail = ({vehiculo}) => {

    const [isCount, setIsCount] = useState(true)
    const [cart, setCart] = useState(false)

    const { agregarACart } = useCartContext()
    const onAdd = (Qcant) => {
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
        <h6>Categoría: {vehiculo.categoria}</h6> 
        <h2>{vehiculo.nombre}</h2> 
        <h4>Precio: {vehiculo.precio} {vehiculo.moneda}</h4> 
        <div>
                    <button className='btn btn-primary' style={{margin: '10px 0px 10px 0px'}} onClick={handleCart}>Verificar carrito</button>
                    {
                        isCount ? 
                            <ItemCount initial={1} stock={vehiculo.stock} onAdd={onAdd} />                        
                        :
                            <h4>¡El vehiculo fue agregado!</h4>
                    }   
                    {
                        cart && <CartInDetail />
                    }
        </div>           
    </div>
  )
}
